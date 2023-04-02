import React from 'react'
import '../scss/Ofertas.scss'
import galletas from '../img/galletas.jpg'

const Ofertas = () => {
  return (
    <>
    <section>
        <h2>Ofertas</h2>
        <div className="ofertas">
            <div className="texto">
                <h3>Tortas</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro vitae suscipit voluptatibus totam possimus natus omnis veniam, aliquid repellendus ab perferendis tenetur, incidunt expedita harum laboriosam, quisquam odio. Error, dignissimos.</p>
            </div>
            <div className="imagen">
                <img src={galletas}  />
            </div>
        </div>
    </section>   
    </>
  )
}

export default Ofertas