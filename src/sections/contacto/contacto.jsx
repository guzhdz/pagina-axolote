import React from 'react';
import Input from '../../components/input/input'
import ATexto from '../../components/textarea/textarea'

const Contacto = () => (
    <div className="cont-contacto">
        <div className="container">
            <Input type="text" label="Nombre"/>
            <Input type="email" label="Correo"/>
            <ATexto label="Escribe tu mensaje aqui"/>
        </div>
    </div>
);

export default Contacto;