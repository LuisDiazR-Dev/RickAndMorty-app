import styled from "styled-components";

import { Link } from "react-router-dom";


const studentName = "Luis DíazR-";
const techSkills = ["Html", "Css", "JavaScript", "React + Styled Components", "Redux"];
const alerts = { m1: "Aprobado", m2: "Aprobado", m3: "Aprobado", m4: "Aprobado" };

const About = () => {
	return (
		<section>
			<h2>¡Hola, Mundo!</h2>
			<h2>Soy {studentName}</h2>

			<p>Mis Habilidades son:</p>
			<ul>{techSkills.map((habilidad, index) =>
				(<li key={index}>{habilidad}</li>))}
			</ul>


			<div>
				<button onClick={() => alert(alerts.m1)}>Módulo 1</button>
				<button onClick={() => alert(alerts.m2)}>Módulo 2</button>
				<button onClick={() => alert(alerts.m3)}>Módulo 3</button>
				<button onClick={() => alert(alerts.m4)}>Módulo 4</button>
			</div>


		</section>
	)
}
export default About;