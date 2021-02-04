import React from 'react'
import s from './Button.module.css'

function Button(props) {
    return (
            <button className={s.Button}>{props.buttonTitle}</button>
);
}

export default Button;