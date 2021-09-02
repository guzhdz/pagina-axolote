import React from 'react'
import Button from '../button/button.jsx'

const Card = ({service, description, link, number, backimg, active}) => (
    <div class={`slide slide-${ number } ${ active }`} id={ link }>
      <div class="slide__bg" style={{ backgroundImage: `url(${ backimg })`}} ></div>
      <div class="slide__content">
        <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
          <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
        </svg>
        <div class="slide__text">
          <h2 class="slide__text-heading">{ service }</h2>
          <p class="slide__text-desc">{ description }</p>
          <a href='#Contacto'> <Button texto='Contactanos' /> </a>
        </div>
      </div>
    </div>
)

export default Card