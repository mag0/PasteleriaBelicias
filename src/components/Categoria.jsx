import React from 'react'

const Categoria = ({categoria='Torta', producto=''}) => {
  return (
    <div className='categoria'>
        
        <div className='imagen'>
            <div className="texto">
                <h4>{categoria}</h4>
            </div>
            <img src={producto} alt="torta" />
        </div>        
    </div>
  )
}

export default Categoria