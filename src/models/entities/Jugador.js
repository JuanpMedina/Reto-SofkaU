class Jugador{

    #idJugador;
    #nombreUsuario;
    #ganadas;
    #retiradas;
    #perdidas

    constructor(id,nombreUsuario,ganadas,retiradas,perdidas){
        this.#idJugador = id;
        this.#nombreUsuario = nombreUsuario;
        this.#ganadas = ganadas;
        this.#retiradas = retiradas;
        this.#perdidas = perdidas;
    }

    getIdJugador(){
        return this.#idJugador   
    }

    getNombreUsuario(){
        return this.#nombreUsuario;   
    }

    getGanadas(){
        return this.#ganadas   
    }

    getRetiradas(){
        return this.#retiradas;   
    }
    getPerdidas(){
        return this.#perdidas   
    }

    setIdJugador(idJugador){
        this.#idJugador = idJugador
    }

    setNombreUsuario(nombreUsuario){
        this.#nombreUsuario = nombreUsuario;   
    }

    setGanadas(ganadas){
        this.#ganadas =  ganadas 
    }

    setRetiradas(retiradas){
        this.#retiradas = retiradas;   
    }
    setPerdidas(perdidas){
        this.#perdidas =  perdidas; 
    }

}

module.exports = Jugador;