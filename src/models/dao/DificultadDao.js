const Dificultad = require('../entities/Dificultad');
const CategoriaDao = require('../dao/CategoriaDao');
const fs = require('fs');
const path = require('path');

class DificultadDao{

    static #leerdificultad(){
        return JSON.parse(fs.readFileSync(path.resolve('src/data/dificultades.json')));
    }

    static construirDificultad(idDificultad){
        const dificultades = this.#leerdificultad();
        let dificultad;
        for(let i = 0;i<dificultades.length;i++){
            if(dificultades[i].id == idDificultad){
                let categorias = CategoriaDao.construirCategorias(idDificultad);
                dificultad = new Dificultad(dificultades[i].id,dificultades[i].dificultad,categorias);
                break;
            };

        }
        return dificultad;

    }



}

module.exports = DificultadDao;