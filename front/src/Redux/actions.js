import axios from 'axios';

export const addFav = (infoCharacter) => {
	const endpoint = 'http://localhost:3001/rickandmorty/fav';

	return (dispatch) => {
		axios.post(endpoint, infoCharacter)
			.then(({ data }) => {
				dispatch({
					type: 'ADD_FAV',
					payload: data,
				});
			})
			.catch((error) => {
				console.error('Error adding favorite:', error);
			});
	};
}

export const removeFav = (id) => {
	const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
	return (dispatch) => {
		axios.delete(endpoint).then(({ data }) => {
			console.log(data);
			return dispatch({
				type: 'REMOVE_FAV',
				payload: data,
			});
		});
	};
};










// * Antes del conectar con el backend
// export const addFav = (character) => {
// 	return { type: "ADD_FAV", payload: character }
// };


// export const removeFav = (id) => {
// 	return { type: "REMOVE_FAV", payload: id }
// };