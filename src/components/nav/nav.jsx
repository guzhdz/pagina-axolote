import React from 'react';

import './_nav.scss';
import './nav.js'

const Nav = () => (
    <div className='cont-nav'>
        <div className="hold">
        <div className="header">
            <div className="container">
            <div id="logo">
                <a href="#Inicio"><p>Axolotl Labs</p></a>
            </div>
            <ul className="nav">
                <li><a href="#Inicio">Inicio</a></li>
                <li className="dropdown"><a className="servicios" href="#Servicios">Servicios</a></li>
                    <div className="drop">
                    <a href="#Servicios/web">Diseño web</a>
                        <a href="#Servicios/aplicaciones">Aplicaciones moviles</a>
                        <a href="#Servicios/sistemas">Sistemas empresariales</a>
                        <a href="#Servicios/fotografia">Fotografia</a>
                    </div>
                <li><a href="#Contacto">Contacto</a></li>
            </ul>
            </div>
        </div>
        </div>
    </div>
);

export default Nav;