// * Controllers imports
// TODO: probar ruta por ruta
const { getCharById } = require('../controllers/getCharById')
const { postFav, deleteFav } = require('../controllers/handleFavorites')
const { login } = require('../controllers/login')


// * router express
// const express = require('express') 
// const router = express.Router()
const router = require('express').Router() //lo mismo que lineas 6 y 7


// * Rutas
router.get('/character/:id', getCharById) //personaje 

router.post('/fav', postFav) //postFavorites
router.delete('/fav/:id', deleteFav) //deleteFavorites

router.get('/login', login) //login


module.exports = router
