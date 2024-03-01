import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import { CardsDiv } from "./Cards";

const Favorites = () => {
	const myFavorites = useSelector((state) => state.myFavorites)

	return (
		<CardsDiv>
			{
				myFavorites.map(({ id, name, status, species, gender, origin, image, onClose }) => {
					return (
						<Card
							key={id}
							id={id}
							name={name}
							status={status}
							species={species}
							gender={gender}
							origin={origin}
							image={image}
							onClose={onClose}
						/>
					)
				})
			}
		</CardsDiv>
	)
}

export { Favorites }