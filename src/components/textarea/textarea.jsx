import React from 'react'
import './_textarea.scss'

const ATexto = ({label}) => (
    <div className = 'text-area'>
        <textarea required></textarea>
        <label>{label}</label>
    </div>
)

export default ATexto