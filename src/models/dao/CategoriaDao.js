const Categoria = require('../entities/Categoria');
const PreguntaDao = require('../dao/PreguntaDao');
const fs = require('fs');
const path = require('path');

class CategoriaDao{

    static #leerCategorias(){
        return JSON.parse(fs.readFileSync(path.resolve('src/data/categorias.json')));
    }

    static construirCategorias(idDificultad){
        const categorias = this.#leerCategorias();
        const categoriasConPregunta= [];
        categorias.forEach( categoria =>{
            let pregunta = PreguntaDao.buscarPregunta(categoria.idCategoria,idDificultad);
            categoriasConPregunta.push(new Categoria(categoria.idCategoria,categoria.nombreCategoría,categoria.imagen,pregunta));
        });

        return categoriasConPregunta;

    }



}

module.exports = CategoriaDao;