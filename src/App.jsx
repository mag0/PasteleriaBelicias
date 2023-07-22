import Header from './pages/Header'
import Ofertas from './pages/Ofertas'
import Categorias from './pages/Categorias'
import Consulta from './pages/Consulta'
import Footer from './pages/Footer'
import QuienSoy from './pages/QuienSoy'


function App() {

  return (
    <div className='container'>
      <Header></Header>
      <main>
        <Ofertas></Ofertas>
        <Categorias></Categorias>
        <QuienSoy></QuienSoy>
        <Consulta></Consulta>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
