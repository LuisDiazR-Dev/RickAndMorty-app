import styled from "styled-components";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux'
import { addFav, removeFav } from '../Redux/actions'



//el componente card recibe on objeto como argumento (props)
//-----------------------desestructurado
const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
   const dispatch = useDispatch()
   const myFavorites = useSelector((state) => state.myFavorites)

   const [isFav, setIsFav] = useState(false)//estado local de favoritos
   const handleFavorites = () => { //agregando favoritos a un estado local
      isFav
         ? dispatch(removeFav(id))
         : dispatch(addFav({ id, name, status, species, gender, origin, image, onClose }))
      setIsFav(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true)
         }
      });
   }, [myFavorites]);


   return (
      <CardDiv>
         <div>
            {isFav
               ? (<button onClick={handleFavorites}>💘</button>)
               : (<button onClick={handleFavorites}>🤍</button>)}
            <button onClick={() => onClose(id)}>✖</button>
         </div>
         <div>
            {/* link dinámico 👇 */}
            <Link to={`/detail/${id}`}> <h2> Nombre: {name} </h2> </Link>
            <h3>Estatus: {status}</h3>
            <h3>Especie: {species}</h3>
            <h3>Genero: {gender}</h3>
            <h3>Origen: {origin}</h3>
         </div>
         <img src={image} alt={name} />
      </CardDiv>
   )
}
export default Card
export { CardDiv }

//styled
const CardDiv = styled.div`
   display: flex;
   flex-direction: column;   
   justify-content: space-between;
   text-align: center;
   width: 312px;
   height: 512px;   
   margin: 8px auto;
   overflow: hidden;
   border-radius: 10px;
   border: 8px #00ABC2 ridge;     
   
   
   div:nth-child(1){
      display: flex;
      /* border: 1px red solid; */
      justify-content: space-between;

      button{
         width: 33%;
         font-size: 1.2em;
      }
   }
   img{
      max-width: 100%;
      height: auto;
   }
`




{/* <Card
id={Rick.id}
name={Rick.name}
status={Rick.status}
species={Rick.species}
gender={Rick.gender}
origin={Rick.origin.name}
image={Rick.image}
onClose={() => window.alert('Emulamos que se cierra la card')}
/> */}




//----------------------------Con props
// const Card = (props) =>{
//    return(
//       <div id="{props.id}">
//          <h2>Nombre: {props.name}</h2>
//          <h3>Estatus: {props.status}</h3>
//          <h3>Especie: {props.species}</h3>
//          <h3>Genero: {props.gender}</h3>
//          <h3>Origen: {props.origin}</h3>
//          <img src={props.image} alt='' />         
//       </div>
//    )
// }
// export default Card



// export default function Card(props) {
//    return (
//       <div>
//          {/* <button onClick={}>X</button>
//          <h2>Nombre: {props.name}</h2>

//          <img src={} alt='' /> */}
//       </div>
//    );
// }
