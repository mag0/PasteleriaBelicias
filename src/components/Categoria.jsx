import React from 'react'
import tortas from '../img/tortas.jpg'

const Categoria = ({categoria='Torta'}) => {
  return (
    <div className='categoria'>
        
        <div className='imagen'>
            <div className="texto">
                <h4>{categoria}</h4>
            </div>
            <img src={tortas} alt="torta" />
        </div>        
    </div>
  )
}

export default Categoria