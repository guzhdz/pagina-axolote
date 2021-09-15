import React from 'react';
import Input from '../../components/input/input'
import Textarea from '../../components/textarea/textarea'
import Button from '../../components/button/button'
import './_contact.scss'
import './contant.js'

const Contact = () => (
    <div className="cont-contact">
        <div className="container disappear2">
            <h2 id="title" className="disappear">Contacto</h2>
            <div className="form disappear" id="form">
                <Input type="text" label="Nombre"/>
                <Input type="email" label="Correo"/>
                <Textarea label="Escribe tu mensaje aqui" className="textarea"/>
                <Button texto="Enviar" />
            </div>
            <ul className="bg-bubbles" id="animation">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
        </div>
    </div>
);

export default Contact;