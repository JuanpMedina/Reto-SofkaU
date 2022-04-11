
class Ronda{

    #idRonda;
    #jugador;
    #estadoPartida;
    #cantidadGanada;

    constructor(idRonda,jugador,estadoPartida,cantidadGanada){
        this.#idRonda = idRonda;
        this.#jugador = jugador;
        this.#estadoPartida = estadoPartida;
        this.#cantidadGanada = cantidadGanada;
    }

    getIdRonda(){
        return this.#idRonda;
    }

    getJugador(){
        return this.#jugador;
    }

    getEstadoPartida(){
        return this.#estadoPartida;
    }

    getCantidadGanada(){
        return this.#cantidadGanada;
    }


}

module.exports = Ronda;