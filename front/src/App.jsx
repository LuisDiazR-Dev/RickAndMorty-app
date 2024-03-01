// `https://rym2.up.railway.app/api/character/${id}?key=pi-luisdiazr-dev`
//componentes
import Cards from './components/Cards';
import { NavBar } from './components/NavBar';

// styles
import './App.css'

//dependencias
import axios from 'axios';//luego de instalar  axios para manejar peticiones al un server
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'; //luego de instalar react-router-dom@6.3.0 para rutas

//Hooks
import { useEffect, useState } from 'react';

//Rutas
import About from './components/About';
import Detail from './components/Detail'
import { Account } from './components/Account';
import { FormLogin } from "./components/FormLogin";
import { Favorites } from './components/Favorites';

//access
// const EMAIL = 'diazr.info@gmail.com'
// const PASSWORD = '123asd'


function App() {
  //------------>para identificar la ruta donde estoy parado
  const { pathname } = useLocation()

  //----------->Estados locales
  const [characters, setCharacters] = useState([]);//pra mostrar personajes estado local
  const [access, setAccess] = useState(false)

  // * ---para el login
  const navigate = useNavigate()
  useEffect(() => { !access && navigate('/') }, [access]); // * el que evita que se pueda entrar escribiendo en la ruta /home

  const login = async (userData) => {
    try {
      const endpoint = 'http://localhost:3001/rickandmorty/login'
      const { password, email } = userData
      const response = await axios.get(`${endpoint}/?email=${email}&password=${password}`)
      const { access } = response.data
      setAccess(access)
      navigate('/home')

    } catch (error) {
      window.alert(`usuario no registrado: ${error.message}`)
    }
  }

  // ! antes
  const login2 = (userData) => {
    const endpoint = 'http://localhost:3001/rickandmorty/login'
    const { password, email } = userData

    axios.get(`${endpoint}/?email=${email}&password=${password}`)
      .then((result) => {
        console.log(result.data)
        const { access } = result.data
        setAccess(access)
        navigate('/home')
      })
      .catch((err) => {
        window.alert(`usuario no registrado: ${err.message}`)
      })
  }
  const login3 = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true)
      navigate('/home')
    }
  };



  // * Buscando y agregando Personajes al estado local
  const onSearch = async (id) => {//aquí el id que entra es String
    if (characters.find((char) => char.id == id)) { return window.alert('Ya Tienes esta Carta') }
    if (id > 826) { return window.alert('¡No hay personajes con este ID!') }// *el return evita le ejecución del axios

    try {
      const endpoint = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      setCharacters((oldChars) => [...oldChars, endpoint.data])

    } catch (error) {
      console.log(`ha ocurrido el siguiente error: ${error.message}`);
    }
  }
  const onSearch2 = (id) => {
    if (characters.find((char) => char.id == id)) { return window.alert('Ya Tienes esta Carta') }
    if (id > 826) { return window.alert('¡No hay personajes con este ID!') }

    axios(`http://localhost:3001/rickandmorty/character/${id}`) //petición a  nuestro back
      .then(({ data }) => {
        console.log(data);
        data.name ? setCharacters((oldChars) => [...oldChars, data]) : ''
      })
      .catch((error) => { window.alert(error) })
  };





  // * eliminado personajes del estado local
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id)
        //va a regresar el arreglo de personajes (characters) sin el id que se le esta pasando
        //osea, lo borra del estado cuando se ejecuta onclick
      })
    )
  };


  return (
    <div>
      {/* si es diferente a barra, rendering NavBar */}
      {pathname !== '/' && <NavBar onSearch={onSearch} />}

      <Routes>
        <Route path='/' element={<FormLogin login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/about' element={<About />} />
        <Route path='/account' element={<Account />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>

    </div>
  )
};

export default App;