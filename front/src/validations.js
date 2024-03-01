

const validationFormLogin = (userData) => {
	let error = {}

	if (!userData.email.includes('@') || !userData.email) error.e1 = 'Ingrese un email valido'
	if (userData.email.length > 35) error.e3 = 'E-mail muy largo'

	if (!/\d/.test(userData.password)) error.p1 = 'Debe tener un numero'
	if (userData.password.length < 6 || userData.password.length > 10) error.p2 = 'Longitud incorrecta'

	return error

}


export { validationFormLogin }

// hola@ejemplo.com333333333333333ejess