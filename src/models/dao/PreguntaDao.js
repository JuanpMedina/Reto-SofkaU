const Pregunta = require('../entities/Pregunta');
const OpcionesDao = require('../dao/OpcionesDao');
const fs = require('fs');
const path = require('path');

class PreguntaDao {

    static #leerPreguntas() {
        return JSON.parse(fs.readFileSync(path.resolve('src/data/preguntas.json')));
    }

    static buscarPregunta(idCategoria,idDificultad){
        const preguntas = this.#leerPreguntas();
        let preguntaEncontrada;
        for(let i = 0;i<preguntas.length;i++){
            if (preguntas[i].idCategoria == idCategoria && preguntas[i].idDificultad == idDificultad) {
                const opciones = OpcionesDao.buscarOpciones(preguntas[i].idPregunta);
                preguntaEncontrada  = new Pregunta(preguntas[i].idPregunta,preguntas[i].idCategoria,preguntas[i].pregunta,opciones);
                break;      
            }
        }

        return preguntaEncontrada;

    }

    static buscarPreguntaPorId(idPregunta){
        const preguntas = this.#leerPreguntas();
        let preguntaEncontrada;
        for(let i = 0;i<preguntas.length;i++){
            if (preguntas[i].idPregunta == idPregunta) {
                const opciones = OpcionesDao.buscarOpciones(idPregunta);
                preguntaEncontrada  = new Pregunta(preguntas[i].idPregunta,preguntas[i].idCategoria,preguntas[i].pregunta,opciones);
                break;      
            }
        }

        return preguntaEncontrada;

    }

}

module.exports = PreguntaDao;