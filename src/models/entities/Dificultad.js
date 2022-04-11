
class Dificultad{

    #idDificultad;
    #dificultad;
    #categorias;

    constructor(idDificultad,dificultad,categorias){
        this.#idDificultad = idDificultad;
        this.#dificultad = dificultad;
        this.#categorias = categorias;
    }

    getIdDificultad(){
        return this.#idDificultad;
    }

    getDificultad(){
        return this.#dificultad;
    }

    getCategorias(){
        return this.#categorias;
    }

    setIdDificultad(idDificultad){
        this.#idDificultad = idDificultad;
    }

    setDificultad(dificultad){
        this.#dificultad = dificultad;
    }

    setPreguntasPorCategoria(categorias){
        this.#categorias = categorias;
    }



}


module.exports = Dificultad;