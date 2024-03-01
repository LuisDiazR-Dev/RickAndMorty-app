// --------------------------------Express--------------------------------
const URL = 'https://rym2.up.railway.app/api/character'

const axios = require('axios');



// const getCharById = (request, response) => {
// 	const { id } = request.params

// 	axios.get(`${URL}/${id}?key=pi-luisdiazr-dev`)
// 		.then((result) => { return result.data })
// 		.then(({ id, name, gender, origin, status, species, image }) => {
// 			let character = { id, name, gender, origin, status, species, image }

// 			response.status(200).json(character)
// 			console.log(character);
// 		})
// 		.catch((error) => {
// 			response.status(500).json(`No hay personaje con el el id ${id}: ${error.message}`)
// 		})

// }

const getCharById = async (request, response) => {
	try {

		const { id } = request.params;
		const result = await axios.get(`${URL}/${id}?key=pi-luisdiazr-dev`);
		const { name, gender, origin, status, species, image } = result.data;

		const idNum = +id
		const character = { id: idNum, name, gender, origin, status, species, image };

		response.status(200).json(character);
		console.log(character);
	} catch (error) {
		response.status(500).json(`No hay personaje con el id ${id}: ${error.message}`);
	}
};

module.exports = { getCharById }

















// ---------------------------------web server --------------------------------
// // https://rym2.up.railway.app/api/character/${id}?key=pi-luisdiazr-dev
// const URL = 'https://rym2.up.railway.app/api/character/${id}?key=pi-luisdiazr-dev'
// const axios = require('axios')


// const getCharById = (response, id) => {

// 	const URL = 'https://rym2.up.railway.app/api/character'

// 	// axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-luisdiazr-dev`)
// 	axios.get(`${URL}/${id}?key=pi-luisdiazr-dev`)
// 		//manejamos caso de éxito. response puede traer un valor o una razón.
// 		//el valor es resuelto o rechazado 
// 		//la razón es el porque fue rechazado
// 		.then((response) => { return response.data })
// 		.then(({ name, gender, species, origin, status, image, id }) => {//destructured el objeto data
// 			const character = {
// 				id,
// 				name,
// 				gender,
// 				species,
// 				origin,
// 				status,
// 				image
// 			}
// 			console.log(character) //muestra en consola el personaje. el id es number
// 			response
// 				.writeHead(200, { 'Content-type': 'application/json' })
// 				.end(JSON.stringify(character))
// 		})
// 		.catch((reject) => {
// 			response.writeHead(500, { 'Content-type': 'text/plain' }).end(`El personaje con el id: ${id} no fue encontrado mjs desde el back`)
// 			// console.log(reject)
// 			//otra manera de responder seria :
// 			// response.writeHead(500, {'Content-type': 'text/plain' }).end(reject.message)
// 		})
// }

// module.exports = { getCharById };