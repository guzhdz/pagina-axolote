import React from 'react';
import './app.scss';
import ATexto from './components/textarea/textarea';
<<<<<<< Updated upstream
=======

import Boton from './components/button/button';
import Input from './components/input/input';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <ATexto label='Tu mensaje'/>
<<<<<<< Updated upstream
=======

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

>>>>>>> Stashed changes
    </div>
  );
}

export default App;