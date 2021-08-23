import React from 'react';
import Input from '../../components/input/input'
import Textarea from '../../components/textarea/textarea'

const Contact = () => (
    <div className="cont-contact">
        <div className="container">
            <Input type="text" label="Nombre"/>
            <Input type="email" label="Correo"/>
            <Textarea label="Escribe tu mensaje aqui"/>
        </div>
    </div>
);

export default Contact;