import React from 'react'

const Categoria = ({imagen='tortas', categoria='Torta'}) => {
  return (
    <div className='categoria'>
        
        <div className='imagen'>
            <div className="texto">
                <h4>{categoria}</h4>
            </div>
            <img src={`${imagen}.jpg`} alt="torta" />
        </div>        
    </div>
  )
}

export default Categoria