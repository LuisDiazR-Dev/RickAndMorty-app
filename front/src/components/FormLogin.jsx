import { useState } from "react"
import { validationFormLogin } from "../validations";

import styled from "styled-components"



const FormLogin = ({ login }) => {

	//pra estado del usuario mirando al form
	const [userData, setUserData] = useState({
		email: '',
		password: ''
	})

	//para estado de un error
	const [error, setError] = useState({})

	//para manejar los input
	const handleForm = (event) => {
		//extraigo del event las las propiedades que necesito
		const { name, value } = event.target
		//ahora si, set al estado. La Arrow maneja mejor los cambios de estado

		//1ro lo actualizamos
		setUserData((oldData) => ({
			...oldData,
			[name]: value
		}))

		//2ro validamos si hay error
		setError(validationFormLogin({
			...userData,
			[name]: value
		}))


	}

	//para manejar el acceso
	const manejarSubmit = (event) => {
		event.preventDefault()  //
		login(userData)
	}



	return (
		<FormBody action="">
			<h2>Log in</h2>

			<div>
				<label htmlFor='emailId'>E-mail:
					<input
						type="text"
						id="emailId"
						name='email'
						value={userData.email}
						onChange={handleForm}
						placeholder="ingrese Email"
					/>
					{error.e1
						? <p>{error.e1}</p>
						: error.e3
							? <p>{error.e3}</p>
							: null}
							<p>nota: luisDiazR-Dev</p>
				</label>

				<label htmlFor="passwordId">Password:
					<input
						type="text"
						id="passwordId"
						name='password'
						value={userData.password}
						onChange={handleForm}
					/>
					{error.p1
						? <p>{error.p1}</p>
						: error.p2
							? <p>{error.p2}</p>
							: null}
							<p>nota: asd123</p>
				</label>

			</div>



			<button onClick={manejarSubmit}>Acceder</button>
			<a href="#"><p>has olvidado tu contraseña?</p></a>
		</FormBody>
	)
}

const FormBody = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
	border-radius: 10px;
	border: 4px #00ABC2 ridge;    
	
	width: 200px;
	margin: auto;
	padding: 12px;

	h2{
		text-align: center;
	}
	p{
		font-size: 0.7em;
	}

	button{
		padding: 0.3em 1.2em;
		margin: 2em 0 1em 0;
		transition: border-color 0.25s;
	}

`

export { FormLogin }