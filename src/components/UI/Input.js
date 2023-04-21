import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* <input type="text" id={props.input.id} />  is similar to below code*/}
        <input  {...props.input} />
    </div>
  )
}

export default Input