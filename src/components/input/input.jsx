import React from 'react'
import './_input.scss'

const Input = ({type, label}) => (
    <>
    <div className="cont-input">
        <input type={type} placeholder={label}/>
        <label>{label}</label>
    </div>
    </>

);

export default Input;