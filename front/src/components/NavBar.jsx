import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";

import SearchBar from "./SearchBar";


const ButtonNav = styled.button`
  /* border-radius: 5px; */
  /* border: 1px solid transparent; */
  padding: 0.3em 1.2em;
  margin: 0.3em 0.6em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  /* color: rgba(255, 255, 255, 0.87); */
  /* background-color: #1a1a1a; */
  /* background-color: #00ABC2; */
  cursor: pointer;
  transition: border-color 0.25s;

  
  &:hover{
	/* border-color: #646cff; */
	/* border-color: #00ABC2;	 */	
  }
`

const NavBar = ({ onSearch }) => { //desestructuramos onSearch
	const navigate = useNavigate()
	const logOut = (event) => {
		if (event) navigate('/')
	}

	return (
		<nav>
			<div>
				<h1>Rick and Morty App</h1>
			</div>

			<div>
				<SearchBar onSearch={onSearch} />
			</div>
			<div>
				<Link to={'/home'}> <ButtonNav>Home</ButtonNav> </Link>
				<Link to={'/favorites'}> <ButtonNav>Favorites</ButtonNav> </Link>
				<Link to={'/about'}> <ButtonNav>About</ButtonNav> </Link>
				<Link to={'/account'}> <ButtonNav>Account</ButtonNav> </Link>
				<ButtonNav onClick={logOut} >Log out</ButtonNav>
			</div>
		</nav>
	)
}

// export default NavBar
export { ButtonNav, NavBar };


// #00ABC2