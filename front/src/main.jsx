import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' //luego de instalar react-router-dom@6.3.0 para rutas
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'


import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  //envolviendo  con Browser para poder trabajar con rutas
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
