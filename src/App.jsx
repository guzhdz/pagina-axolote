import React from 'react';
import './app.scss';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Home from './sections/home/home';
import Services from './sections/services/services';
import Contacto from './sections/contacto/contacto';

function App() {
  return (
    <div className="App">
      <div id="Home"/>
      <Nav />
      <Home />
      <Services />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
