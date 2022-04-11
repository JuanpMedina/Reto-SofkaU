
const express = require('express');
const gameRoutes = express.Router();
const GameController = require('../controllers/game.controller');

gameRoutes.get('/',GameController.index);
gameRoutes.get('/iniciarJuego', GameController.iniciarJuego);
gameRoutes.post('/ingresar', GameController.ingresarJugador);
gameRoutes.post('/enviarRespuesta',GameController.evaluarRespuesta);
gameRoutes.get('/terminar',GameController.terminarPartida);
gameRoutes.get('/historico',GameController.verHistorico);

module.exports = gameRoutes;