import React from 'react';
import './app.scss';
<<<<<<< Updated upstream
import ATexto from './components/textarea/textarea';
import Boton from './components/button/button';
import Input from './components/input/input';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
=======
import Nav from './components/nav/nav.jsx';
import Home from './sections/home/home.jsx';
import Services from './sections/services/services.jsx';
import Contact from './sections/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';
import Parallax from './components/parallax/parallax.jsx'
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <ATexto label='Tu mensaje'/>


      <Boton texto='Cotiza aquí'/>
      <Input 
        type="text"
        label="Nombre"
      />
      <Input 
        type="email"
        label="Correo electronico"
      />

      <Nav/>

      <Footer/>

=======
      <div id="Inicio"/>
      <Nav />
      <Home />
      <div id="Servicios"/>
      <Services />
      <div id="Contacto"/>
      <Contact />
      <Parallax />
      <Footer />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
