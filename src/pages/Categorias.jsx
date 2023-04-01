import React from 'react'
import '../scss/Categorias.scss'
import Categoria from '../components/Categoria'

const Categorias = () => {
  return (
    <section>
        <h2 id='Categorias'>Categorias</h2>
        <div className='categorias'>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
        </div>
    </section>
  )
}

export default Categorias