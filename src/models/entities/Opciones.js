class Opciones{

    #idPregunta;
    #correcta
    #incorrecta1
    #incorrecta2
    #incorrecta3

    constructor(idPregunta,correcta,incorrecta1,incorrecta2,incorrecta3){
        
        this.#idPregunta = idPregunta;
        this.#correcta = correcta;
        this.#incorrecta1 = incorrecta1;
        this.#incorrecta2 = incorrecta2;
        this.#incorrecta3 = incorrecta3;
    }


    getIdPregunta(){
        return this.#idPregunta;
    }

    getCorrecta(){
        return this.#correcta;
    }

    getIncorrecta1(){
        return this.#incorrecta1;
    }

    getIncorrecta2(){
        return this.#incorrecta2;
    }

    getIncorrecta3(){
        return this.#incorrecta3;
    }


    setIdPregunta(idPregunta){
        this.#idPregunta = idPregunta;
    }

    setCorrecta(correcta){
        this.#correcta = correcta;
    }

    setIncorrecta1(incorrecta1){
        this.#incorrecta1 = incorrecta1;
    }

    setIncorrecta2(incorrecta2){
        this.#incorrecta2 = incorrecta2;
    }

    setIncorrecta3(incorrecta3){
        this.#incorrecta3 = incorrecta3;
    }

    


}

module.exports = Opciones;