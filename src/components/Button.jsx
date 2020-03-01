import React from 'react'
import './Button.css'

/*
 * Button component is a functional component what means it is stateless. 
 */
export default props => {
    const classes = 'button ' +
        `${props.operation ? 'operation' : ''}` +
        `${props.double ? 'double' : ''}` +
        `${props.triple ? 'triple' : ''}`

    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>)
} 