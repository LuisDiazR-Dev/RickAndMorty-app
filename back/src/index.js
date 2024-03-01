//-------------------------------Express---------------------------------
const express = require('express');
const server = express();
const PORT = 3001;

const morgan = require('morgan');
const router = require('./routes');


//controllers
// const { getCharById } = require('./controllers/getCharById');
// const { postFav, deleteFav } = require('./controllers/handleFavorites');


//middleware van antes de las rutas
server.use(morgan('dev')) //dev es el tipo de formato de respuesta. hay varios, ver más
server.use(express.json()) // este señor parsea los objetos que vengan en las req a json
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});



server.use('/rickandmorty', router)



//* SERVER
server.listen(PORT, () => {
	console.log(`el servidor esta escuchando http://localhost:${PORT}...`)
});
























//------------------------------Web server------------------------------
// const http = require('http');
// const PUERTO = 3001
// const morgan = require('morgan')





// http.createServer((request, response) => {//creando servidor
// 	response.setHeader('Access-Control-Allow-Origin', '*');//dando permisos para solicitud

// 	if (request.url.includes('/rickandmorty/character')) {

// 		console.log(request.url); //esta vivo
// 		const id = request.url.split('/').at(-1)//toma el Id
// 		// console.log(typeof (id)); // string

// 		//------ahora el controller manejara la petición
// 		getCharById(response, id)
// 	}

// }).listen(PUERTO, () => { console.log(`el servidor esta escuchando http://localhost:${PUERTO}...`) })





// const characters = require('./utils/data');
// http://localhost:3001//rickandmorty/character/3
// http://127.0.0.1:3001//rickandmorty/character/4