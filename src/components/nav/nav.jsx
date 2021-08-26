import React from 'react';

import './_nav.scss';
import './nav.js'

const Nav = () => (
    <div className='cont-nav'>
        <div class="hold">
        <div class="header">
            <div class="container">
            <div id="logo">
                <a href="#Inicio"><p>Axolotl Labs</p></a>
            </div>
            <ul class="nav">
                <li><a href="#Inicio">Inicio</a></li>
                <li><a href="#Servicios">Servicios</a></li>
                <ul>
                    <li><a href="">Diseño web</a></li>
                    <li><a href="">Aplicaciones moviles</a></li>
                    <li><a href="">Sistemas empresariales</a></li>
                    <li><a href="">Fotografia</a></li>
                </ul>
                <li><a href="#Contacto">Contacto</a></li>
            </ul>
            </div>
        </div>
        </div>
    </div>
);

export default Nav;