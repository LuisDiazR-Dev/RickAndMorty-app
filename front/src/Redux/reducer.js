

const initialState = {
	myFavorites: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_FAV":
			return {
				...state,
				myFavorites: action.payload

				// myFavorites: [...state.myFavorites, action.payload]
				// myFavorites: [...state, action.payload]
				// allCharacters: payload
			};
		// * antes
		// return {
		// 	...state,
		// 	myFavorites: [...state.myFavorites, action.payload]
		// }

		case "REMOVE_FAV":
			// * ahora
			return { ...state, myFavorites: action.payload };
		// * antes
		// return {
		// 	...state,
		// 	myFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.payload))
		// }
		default:
			return { ...state }
	}
}

export default reducer;