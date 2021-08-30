import React from 'react';
import './_footer.scss';
import logo from '../footer/images/logo.png';

const Footer = () => (
<div className='cont-footer'>
  <footer class="fixed_footer">
    <div class="content">
      <div className="data">
        <div>
          <h6>Axolotl Labs</h6>
          <p>
            AXOLOTL LABS es una empresa de desarrollo de software completa y 
            de la más alta calidad, dejando que su página web hable por si sola
          </p>
        </div>
        
        <div>
          <h6>Servicios</h6>
          <ul>
            <li><a href="https//www.google.com">Diseño web </a></li>
            <li><a href="">Aplicaciones moviles</a></li>
            <li><a href="">Sistemas empresariales</a></li>
            <li><a href="">Fotografia</a></li>
          </ul>
        </div>

        <div>
          <h6>Redes sociales</h6>
          <ul>
            <li>Facebook</li>
            <li>Whatsapp</li>
            <li>Gmail</li>
          </ul>
        </div>
      </div>
    
      <hr />

      <div className="links">
          <p>Copyright &copy; 2021 Todos los drechos reservados por Axolotl labs</p>
      </div>
    </div>
  </footer>
</div>
);

export default Footer;