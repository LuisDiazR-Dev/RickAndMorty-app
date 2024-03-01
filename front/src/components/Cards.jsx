import styled from "styled-components";
import Card from './Card';

const CardsDiv = styled.section`
	display: flex;
	flex-wrap: wrap;
	`



// recibe por props un objeto con la propiedad characters
//--------------------desestructurado
const Cards = ({ characters, onClose }) => {
	return (
		<CardsDiv>
			{//--------------------llaves por ser código Js
				characters.map(({ id, name, status, species, gender, origin, image }) => {//--------------------desestructurado
					return <Card
						key={id}
						id={id}
						name={name}
						status={status}
						species={species}
						gender={gender}
						origin={origin.name} //origin.name porque necesitamos el valor name del objeto origin
						image={image}
						onClose={onClose}
					/>

					// characters.map((personaje)=>{ //---------------------------------con props
					// 	return <Card
					// 		key=     	{personaje.id}
					// 		name=    	{personaje.name}
					// 		status=  	{personaje.status}
					// 		species= 	{personaje.species}
					// 		gender= 	{personaje.gender}						
					// 		origin=		{personaje.origin.name} //origin.name porque necesitamos el valor name del objeto origin
					// 		image=		{personaje.image}	
					// 		onClose={() => window.alert('Emulamos que se cierra la card')}
					// 	/>
				})
			}
		</CardsDiv>
	)
}
export default Cards
export { CardsDiv }


// --------------------por props
// const Cards = (props) =>{
//    return(
//       <div>

//       </div>
//    )
// }
// export default Cards


//--------------------otra sintaxis
// export default function Cards(props) {
//    return <div></div>;
// }
