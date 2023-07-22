import React from 'react'
import '../scss/Categorias.scss'
import Categoria from '../components/Categoria'
import torta from '../img/torta-potente.jpeg'
import galletitas from '../img/galletitas.jpeg'
import tarta from '../img/tarta-de-batata.jpeg'
import facturas from '../img/facturas.jpeg'
import macarons from '../img/macarons.jpeg'
import alfajores from '../img/alfajores-azucar.jpeg'

const Categorias = () => {
  return (
    <section>
        <h2 id='Categorias'>Categorias</h2>
        <div className='categorias'>
            <Categoria categoria='Torta' producto={torta}></Categoria>
            <Categoria categoria='Alfajores' producto={alfajores}></Categoria>
            <Categoria categoria='Tartas' producto={tarta}></Categoria>
            <Categoria categoria='Facturas' producto={facturas}></Categoria>
            <Categoria categoria='Galletitas' producto={galletitas}></Categoria>
            <Categoria categoria='Macarons' producto={macarons}></Categoria>
        </div>
    </section>
  )
}

export default Categorias