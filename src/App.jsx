import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import Contacto from './components/Contacto/Contacto';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SolicitarTarjeta from './components/SolicitarTarjeta/SolicitarTarjeta';
import VerificarEstado from './components/VerificarEstado/VerificarEstado';
import Home from './components/Home/Home';
import SolicitudEnviada from './components/SolicitudEnviada/SolicitudEnviada';



function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/solicitar_tarjeta' element={<SolicitarTarjeta />}/>
          <Route path='/verificar_estado' element={<VerificarEstado />}/>
          <Route path='/solicitud_enviada' element={<SolicitudEnviada />}/>
        </Routes>
      </Router>
      <Footer />

    </>
  )
}

export default App
