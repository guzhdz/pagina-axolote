import React from 'react'
import Button from '../button/button.jsx'

const Card = ({service, description, link, number, backimg, active}) => (
    <div className={`slide slide-${ number } ${ active }`} id={ link }>
      <div className="slide__bg" style={{ backgroundImage: `url(${ backimg })`}} ></div>
      <div className="slide__content">
        <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
          <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
        </svg>
        <div className="slide__text">
          <h2 className="slide__text-heading">{ service }</h2>
          <p className="slide__text-desc">{ description }</p>
          <a href='#Contacto'> <Button texto='Contactanos' /> </a>
        </div>
      </div>
    </div>
)

export default Card