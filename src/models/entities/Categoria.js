
class Categoria{

    #idCategoria;
    #categoria;
    #imagen;
    #pregunta;

    constructor(idCategoria,categoria,imagen,pregunta){
        this.#idCategoria = idCategoria;
        this.#categoria = categoria;
        this.#imagen = imagen;
        this.#pregunta = pregunta;
    }

    getIdCategoria(){
        return this.#idCategoria;
    }

    getCategoria(){
        return this.#categoria;
    }

    getImagen(){
        return this.#imagen;
    }

    getPregunta(){
        return this.#pregunta;
    }

    setIdCategoria(idCategoria){
        this.#idCategoria = idCategoria;
    }

    setCategoria(categoria){
        this.#categoria = categoria;
    }

    setImagen(imagen){
        this.#imagen = imagen;
    }

    setPregunta(pregunta){
        this.#pregunta = pregunta;
    }

}


module.exports = Categoria;