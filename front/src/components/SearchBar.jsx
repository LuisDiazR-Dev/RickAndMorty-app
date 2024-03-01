import { useState } from "react" //inicializando estado
// import styled from 'styled-components'
import {ButtonNav} from './NavBar'

const SearchBar = ({onSearch})=>{
	
	const [id, setId] = useState('')//definiendo estado en relación a un id
	//id como referencia pero puede ser cualquier nombre

	// const handleChange = (event) =>{ //función que detecta el click y toma el value del input
	// 	setId(event.target.value)		//evento.dondeSeProduce.value
	// }

	// return(
	// 	<div>
	// 		<input type='search' value={id} onChange={handleChange} /> 
	// 		{/* onChange captura cada value y ejecuta handleChange*/}

	// 		<button onClick={()=> onSearch(id)}>Agregar</button> 
	// 		{/* se pasa a una función para que solo se ejecute con click */}
	// 	</div>
	// )


	const handleChange = (event) =>{
		setId(event.target.value)
	}
	const handleOnClick = () => {
		onSearch(id)
		setId('')
	}
	return(
		<>
			<input type="search" value={id} onChange={handleChange} required />
			<ButtonNav onClick={handleOnClick}>Agregar</ButtonNav>
		</>
	)
}
export default SearchBar











//--------------------otra sintaxis
// export default function SearchBar(props) {
//    return (
//       <div>
//          {/* <input type='search' />
//          <button onClick={}>Agregar</button> */}
//       </div>
//    );
// }
