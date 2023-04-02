import Header from './pages/Header'
import Ofertas from './pages/Ofertas'
import Categorias from './pages/Categorias'
import Consulta from './pages/Consulta'
import Footer from './pages/Footer'


function App() {

  return (
    <div className='container'>
      <Header></Header>
      <main>
        <Ofertas></Ofertas>
        <Categorias></Categorias>
        <Consulta></Consulta>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
