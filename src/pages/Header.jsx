import React from 'react'
import '../scss/Header.scss'

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h1>Pasteleria Belicias</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#Inicio">Inicio</a></li>
                <li><a href="#Categorias">Categorias</a></li>
                <li><a href="#Consulta">Consulta</a></li>
                <li><a href="#QuienSoy">Quien soy</a></li>               
            </ul>
        </nav>
    </header>
  )
}

export default Header