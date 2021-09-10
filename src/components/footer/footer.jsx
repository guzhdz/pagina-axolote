import React from 'react';
import './_footer.scss';
import logo from './images/logo.png';
import { ReactComponent as Facebook } from './images/facebook.svg';
import { ReactComponent as Whatsapp } from './images/whatsapp.svg';
import { ReactComponent as Gmail } from './images/gmail.svg';

const Footer = () => (
<footer>
  
  <div className="cont-footer">
    <div className="content">
      <div className="logo">
        <img src={logo} alt=''/>
        <p>Somos una empresa de desarrollo de software a nivel profesional internacional</p>
        </div>
      <div className="social">
      <div className="whatsapp">
        <a href="https://api.whatsapp.com/send?phone=3327984007&text=Bienvenido%20a%20Axolotl%20Labs,%20Cu%C3%A9ntanos...%20%C2%BFQu%C3%A9%20necesitas?"> <Whatsapp /> </a>
      </div>
      <div className="facebook">
        <a href="https://www.facebook.com/Axolotl.Labs.Ventas/"> <Facebook /> </a>
      </div>
      <div className="gmail">
        <a href="mailto:axolotlabs.ventas@gmail.com"> <Gmail /> </a>
      </div>
      </div>
    </div>
    <div className="privacy">
      <div className="aviso">
        <span>@ 2021 Axolotl Labs - Aviso de </span> <span><a href=''>privacidad</a></span>
      </div>
    </div>
  </div>

  <svg viewBox="0 0 120 28">
    <defs>
      <mask id="xxx">
        <circle cx="7" cy="12" r="40" fill="#fff" className="circulo" />
      </mask>

      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
      <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
    </defs>

    <use id="wave3" class="wave" xlinkHref="#wave" x="0" y="-2"></use>
    <use id="wave2" class="wave" xlinkHref="#wave" x="0" y="0"></use>

    <g class="topball" >
      <a href='#Inicio'>
      <circle class="ball" cx="110" cy="8" r="4" stroke="none" stroke-width="0" />
      <g class="arrow">
        <polyline class="" points="108,8 110,6 112,8" fill="none" />
        <polyline class="" points="110,6 110,10.5" fill="none" />
      </g>
      </a>
    </g>

    <g class="gooeff">
      <circle class="drop drop1" cx="20" cy="2" r="1.8" />
      <circle class="drop drop2" cx="25" cy="2.5" r="1.5" />
      <circle class="drop drop3" cx="16" cy="2.8" r="1.2" />
      <use id="wave1" class="wave" xlinkHref="#wave" x="0" y="1" />
      <path   id="wave1"  class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
  </g>

  </svg>
</footer>
  
);

export default Footer;