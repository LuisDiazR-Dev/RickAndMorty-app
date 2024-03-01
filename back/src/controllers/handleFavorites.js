let myFavorites = []

const postFav = (require, response) => {
    const character = require.body

    myFavorites.push(character)

    return response.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params
    console.log('estado del array');
    console.log(typeof (id))
    console.log(myFavorites)

    // TODO: revisar la necesidad de los paréntesis en (myFavorites)
    myFavorites = myFavorites.filter(myFavorite => myFavorite.id !== +id)

    console.log('estado después de borrar')
    console.log(myFavorites)
    return res.status(200).json(myFavorites)
}

module.exports = { postFav, deleteFav }