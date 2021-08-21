import React from 'react';
import './app.scss';
import ATexto from './components/textarea/textarea';
import Boton from './components/button/button';
import Input from './components/input/input';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
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

    </div>
  );
}

export default App;
