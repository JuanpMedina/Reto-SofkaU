const Jugador = require('../entities/Jugador');
const RondaDao = require('../dao/RondaDao');
const fs = require('fs');
const path = require('path');

class JugadorDao{

    static #leerJugadores(){
        return JSON.parse(fs.readFileSync(path.resolve('src/data/jugadores.json')));
    }

    static obtenerJugadores(){

        let jugadores = this.#leerJugadores();
        let arregloJugadores = [];
        jugadores.forEach(jugador=>{
            arregloJugadores.push(new Jugador(jugador.idJugador, jugador.nombreUsuario,jugador.ganadas,jugador.retiradas,jugador.perdidas))
        });
        return arregloJugadores;

    }

    static buscarJugador(usuario){
        let jugadores = this.#leerJugadores();
        let jugador = null;
        if(jugadores.length==0){
            return jugador;
        }else{
            for(let i = 0;i<jugadores.length;i++){
                if(jugadores[i].nombreUsuario == usuario){
                    jugador = new Jugador(jugadores[i].idJugador,jugadores[i].nombreUsuario,jugadores[i].ganadas,jugadores[i].retiradas,jugadores[i].perdidas);
                    break;
                }
            }        
            return jugador;
            
        }      
    }

    static agregarJugador(jugador){
        let jugadores = this.#leerJugadores();
        jugadores.push(jugador);
        fs.writeFileSync(path.resolve('src/data/jugadores.json'),JSON.stringify(jugadores, null, 2));

    }

    static calcularIdJugador(){
        let jugadores = this.#leerJugadores();
        let index = 1;
        if(jugadores.length>0){
            index = jugadores[jugadores.length-1].idJugador + 1;
            return index;
        }else{
            return index;
        }
        
    }

    static actualizarJugador(nombreJugador){

        let jugadores = this.#leerJugadores();
        for(let i = 0;i<jugadores.length;i++){
            if(jugadores[i].nombreUsuario == nombreJugador){
                jugadores[i].ganadas = RondaDao.calcularPartidasGanadas(nombreJugador);
                jugadores[i].retiradas = RondaDao.calcularPartidasRetiradas(nombreJugador);
                jugadores[i].perdidas = RondaDao.calcularPartidasPerdidas(nombreJugador);
                break;
            }
        }
        fs.writeFileSync(path.resolve('src/data/jugadores.json'),JSON.stringify(jugadores, null, 2));
    }

    

}


module.exports = JugadorDao;