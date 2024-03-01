

// TODO: modificar la función en el botón log out para que se maneje por estado y no solo por navegación.
const users = require('../utils/users')

const login = (request, response) => {
    const { email, password } = request.query;

    console.log(request.query);

    const userFound = users.find((user) => user.email === email && user.password === password)

    return userFound
        ? response.status(200).json({ access: true })
        : response.status(404).json({ access: false })
}

module.exports = { login }