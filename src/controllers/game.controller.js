const PreguntaDao = require('../models/dao/PreguntaDao');
const ProceduresController = require('./procedures.controller');
const JugadorDao = require('../models/dao/JugadorDao');
const Ronda = require('../models/entities/Ronda');
const RondaDao = require('../models/dao/RondaDao');


class GameController {

    static index(req, res) {

        res.render('ind');
    }

    static iniciarJuego(req, res) {
        let usuario = req.session.jugador;
        const [dificultad, categoriaYPregunta, opciones, premio] = ProceduresController.obtenerParametros('1');
        res.render('index', { dificultad: dificultad, categoriaYPregunta, opciones, premio , usuario});

    }

    static evaluarRespuesta(req, res) {

        req.session.jugador = req.body.user;
        console.log(req.session.jugador)
        const preguntaAEvaluar = PreguntaDao.buscarPreguntaPorId(req.body.question);
        if (preguntaAEvaluar.getOpciones().getCorrecta() == req.body.respuesta) {
            req.session.premio = req.body.prize;
            let numeroDificultad = Number(req.body.dificult);
            if (numeroDificultad < 5) {
                
                numeroDificultad += 1;
                const [dificultad, categoriaYPregunta, opciones, premio] = ProceduresController.obtenerParametros(numeroDificultad);
                let usuario = req.session.jugador;
                res.render('index', { dificultad: dificultad, categoriaYPregunta, opciones, premio ,usuario})

            } else {
                req.session.ganador = true;
                res.redirect('/terminar')
            }
        } else {

            res.redirect('/terminar');
        }
    }

    static terminarPartida(req, res) {
        let jugador;
        if(req.query.userRetirado){
            jugador = req.query.userRetirado;
        }else{
            jugador = req.session.jugador;
        };
        let premio = req.query.retirado || req.session.ganador ? req.session.premio : '0';
        console.log(premio)
        let id = RondaDao.calcularIdRonda();
        RondaDao.registrarRonda(new Ronda(id, jugador, req.query.retirado ? 'Retirado' : req.session.ganador ? 'Ganada' : 'Perdida', premio));
        let estado;
        if(req.query.retirado){
            estado = 'retirado';
        }else if(req.session.ganador){
            estado = 'ganador'
        }else{
            estado = 'perdedor';
        }
        JugadorDao.actualizarJugador(jugador); 
        req.session.destroy();
        res.render('finish', { jugador, premio , estado }); 

    }

    static ingresarJugador(req, res) {
        let usuariocapturado = req.body.user
        req.session.premio = 0;
        let jugador = JugadorDao.buscarJugador(usuariocapturado);
        if (jugador != null) {
            req.session.jugador = jugador.getNombreUsuario();
            console.log(req.session.jugador)
            res.redirect('/iniciarJuego');
        } else {
            let jugadorNuevo = {
                idJugador: JugadorDao.calcularIdJugador(),
                nombreUsuario: usuariocapturado,
                ganadas: 0,
                retiradas: 0,
                perdidas: 0
            }
            JugadorDao.agregarJugador(jugadorNuevo);
            req.session.jugador = JugadorDao.buscarJugador(usuariocapturado).getNombreUsuario();
            res.redirect('/iniciarJuego');
        }

    }

    static verHistorico(req,res){
        const jugadores = JugadorDao.obtenerJugadores();
        res.render('historico',{jugadores});


    }
}

module.exports = GameController;