
const DificultadDao = require('../models/dao/DificultadDao');
const PremioDao = require('../models/dao/PremioDao');


class ProceduresController{

    static obtenerParametros(idDificultad){

        const dificultad = DificultadDao.construirDificultad(idDificultad);
        let categoriaYPregunta = dificultad.getCategorias()[Math.floor(Math.random()*5)];
        let premio = PremioDao.obtenerPremio(idDificultad)
        let opciones = [
            categoriaYPregunta.getPregunta().getOpciones().getCorrecta(),
            categoriaYPregunta.getPregunta().getOpciones().getIncorrecta1(),
            categoriaYPregunta.getPregunta().getOpciones().getIncorrecta2(),
            categoriaYPregunta.getPregunta().getOpciones().getIncorrecta3(),
        ];

        for(let i = 0;i<opciones.length;i++){
            let indice = Math.floor(Math.random()*4);
            let burbuja = opciones[indice];
            opciones[indice] = opciones[i];
            opciones[i] = burbuja;
        }

        return [dificultad, categoriaYPregunta , opciones , premio];

    }


}
module.exports = ProceduresController;