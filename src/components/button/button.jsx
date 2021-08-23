import React from 'react'
import './_button.scss'

const Button = ( {texto} ) => (
    <div className = 'cont-button'> 
        <button>{texto}</button>
    </div>
)

export default Button
