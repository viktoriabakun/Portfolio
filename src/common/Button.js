import React from 'react'
import s from './Button.module.css'

function Button(props) {
    return (
        <div className={s.remoteBlock}>
            <button className={s.Button}>{props.buttonTitle}</button>
        </div>
);
}

export default Button;