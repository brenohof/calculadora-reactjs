import React from 'react'
import './Button.css'

/*
 * Button component is a functional component what means it is stateless. 
 */
export default props =>
    <button className='button'>{props.label}</button>