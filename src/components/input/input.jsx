import React from 'react'
import './_input.scss'

const Input = ({type, label}) => (
    <>
    <div className="cont-input">
        <input type={type} placeholder={label} name="input2"/>
        <label htmlFor="input2">{label}</label>
    </div>
    </>

);

export default Input;