import React from 'react'
import '../scss/Consulta.scss'

const Consulta = () => {
  return (
    <>
    <section>
        <h2 id='Consulta'>Consulta</h2>
        <div className="consulta">
            <form action="">
              <input type="text" placeholder='Nombre' />
              <input type="text" placeholder='Asunto' />
              <textarea cols="30" rows="10" placeholder='Mensaje'></textarea>
              <button>Enviar</button>
            </form>
        </div>
        </section>
    </>
  )
}

export default Consulta