import React from 'react';
import './app.scss';
import Nav from './components/nav/nav.jsx';
import Services from './sections/services/services.jsx';
import Contact from './sections/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';
import Parallax from './components/parallax/parallax.jsx';

function App() {
  return (
    <div className="App">
      <div id="Inicio"/>
      <Nav />
      <Parallax />
      <div id="Servicios"/>
      <Services />
      <div id="Contacto"/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
