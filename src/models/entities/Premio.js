
class Premio{
    #idPremio
    #cantidadDinero

    constructor(idPremio,cantidadDinero){
        this.#idPremio = idPremio;
        this.#cantidadDinero = cantidadDinero;
    }

    getIdPremio(){
        return this.#idPremio;
    }

    getCantidadDinero(){
        return this.#cantidadDinero;
    }

    setIdPremio(idPremio){
        this.#idPremio = idPremio;
    }

    setCantidadDinero(cantidadDinero){
        this.#cantidadDinero = cantidadDinero;
    }
}




module.exports = Premio;