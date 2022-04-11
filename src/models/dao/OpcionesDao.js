const Opciones = require('../entities/Opciones');
const fs = require('fs');
const path = require('path');

class OpcionesDao{


    static #leerOpciones(){
        
        return JSON.parse(fs.readFileSync(path.resolve('src/data/opciones.json')));

    }

    static buscarOpciones(idPregunta){

        const opciones = this.#leerOpciones();
        let opcionesEncontradas;
        for(let i = 0;i<opciones.length;i++){
            if(opciones[i].idPregunta == idPregunta){
                opcionesEncontradas = new Opciones(opciones[i].idPregunta,opciones[i].correcta,opciones[i].incorrecta1,opciones[i].incorrecta2,opciones[i].incorrecta3);
                break;
            }
        }

        return opcionesEncontradas;

    } 

    



}

module.exports = OpcionesDao;