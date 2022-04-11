const Premio = require('../entities/Premio');
const fs = require('fs');
const path = require('path');

class PremioDao{

    static #leerPremios(){
        return JSON.parse(fs.readFileSync(path.resolve('src/data/premios.json')));
    }

    static obtenerPremio(id){
        let premios = this.#leerPremios();
        let premioEncontrado;
        for(let i = 0;i<premios.length;i++){
            if(premios[i].idPremio == id){
                premioEncontrado = new Premio(premios[i].idPremio,premios[i].cantidadDinero);
                break;
            }
        }
        return premioEncontrado;
    }

}

module.exports = PremioDao;