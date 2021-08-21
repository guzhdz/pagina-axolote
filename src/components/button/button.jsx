import React from 'react'
import './_button.scss'

const Boton = ( {texto} ) => (
    <div className = 'cont-button'> 
        <button>{texto}</button>
    </div>
)

export default Boton
