import React from 'react';
import './_footer.scss';
import logo from './images/logo.png';

const Footer = () => (
  <div className='cont-footer'>
    <footer className="site-footer">
    <svg viewBox="0 0 120 28">
      <defs>
        <mask id="xxx">
          <circle cx="7" cy="12" r="40" fill="#fff" />
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

      <a href="#Inicio">
        <g class="topball">
          <circle class="ball" cx="110" cy="8" r="4" stroke="none" stroke-width="0" />
          

          <g class="arrow">
            <polyline class="" points="108,8 110,6 112,8" fill="none" />
            <polyline class="" points="110,6 110,10.5" fill="none" />
          </g>

        </g>
      </a>
      
      <g class="gooeff">
        <circle class="drop drop1" cx="20" cy="2" r="1.8" />
        <circle class="drop drop2" cx="25" cy="2.5" r="1.5" />
        <circle class="drop drop3" cx="16" cy="2.8" r="1.2" />
        <use id="wave1" class="wave" xlinkHref="#wave" x="0" y="1" />

      <path   id="wave1"  class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
    </g>

    </svg>

    <footer class="flex-rw">
  
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">Axoltl Labs</h4></li>
    <img src= {logo} className="logo"/>
  </ul>
  
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">Servicios</h4></li>

    <li><a href='' class="generic-anchor footer-list-anchor">DISEÑO Y DESARROLLO WEB</a></li>
    <li><a href='' class="generic-anchor footer-list-anchor">APLICACIONES MÓVILES</a></li>
    <li><a href='' class="generic-anchor footer-list-anchor">SISTEMAS PARA EMPRESAS</a></li>
    <li><a href='' class="generic-anchor footer-list-anchor">FOTOGRAFÍA</a></li>
  </ul>
  <ul class="footer-list-top">
    <li id='help'>
      <h4 class="footer-list-header">Contacto</h4></li>
    <li><a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">FACEBOOK</a></li>
    <li><a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">WHATSAPP</a></li>
    <li id='find-a-store'><a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">GMAIL</a></li>

  </ul>

  <section class="footer-bottom-section flex-rw">
<div class="footer-bottom-wrapper">   
<i class="fa fa-copyright" role="copyright">
 
</i> 2021 <address class="footer-address" role="company address">Axolotl Labs</address><span class="footer-bottom-rights"> - Todos los derechos reservados - </span>
    </div>
    <div class="footer-bottom-wrapper">
    <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">Términos</a> | <a href="/privacy-policy.html" class="generic-anchor" rel="nofollow">Privacidad</a>
      </div>
  </section>
</footer>
</footer>
</div>
);

export default Footer;