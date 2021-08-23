import React from 'react';
import './_nav.scss';

const Nav = () => (
    <div className="cont-nav">
        <nav>
            <div className="nav-logo">
                <span>Axolote labs</span>
            </div>
            <div className="nav-section">
                <p>Inicio</p>
                <p>Servicios</p>
                <ul className="services">
                    <li>Diseño web</li>
                    <li>Aplicaciones moviles</li>
                    <li>Sistemas empresariales</li>
                    <li>Fotografia</li>
                </ul>
                <p>contact</p>
            </div>
        </nav>
    </div>
);

export default Nav;