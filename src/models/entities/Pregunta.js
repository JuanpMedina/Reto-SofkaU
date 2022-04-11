class Pregunta {
    
    #idPregunta;
    #categoria;
    #contenidoPregunta;
    #opciones;

    constructor(idPregunta,categoria,contenidoPregunta,opciones){
        this.#idPregunta = idPregunta;
        this.#categoria = categoria;
        this.#contenidoPregunta = contenidoPregunta;
        this.#opciones = opciones;
    }

    getIdPregunta(){
        return this.#idPregunta
    }

    getCategoria(){
        return this.#categoria;
    }

    getContenidoPregunta(){
        return this.#contenidoPregunta
    }
    
    getOpciones(){
        return this.#opciones;
    }


}

module.exports = Pregunta;