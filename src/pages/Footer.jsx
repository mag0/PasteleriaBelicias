import React from 'react'
import '../scss/Footer.scss'

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
          <div className="titulo">
            <h2>Pasteleria Belicias</h2>
          </div>
          <div className="redes">
            <h3>Redes</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Telefono</li>
              <li>Email</li>
            </ul>
          </div>
          <nav>
            <ul>
                <li><a href="#Inicio">Inicio</a></li>
                <li><a href="#Categorias">Categorias</a></li>
                <li><a href="#QuienSoy">Quien soy</a></li>
                <li><a href="#Contacto">Contacto</a></li>
            </ul>
        </nav>
        </div>
    </footer>
    
  )
}

export default Footer