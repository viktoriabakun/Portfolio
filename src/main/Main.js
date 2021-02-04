import React from 'react'
import s from './Main.module.css'
import sContainer from '../common/styles/Container.module.css'


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
            <div className={s.text}>
                <p>Frontend Developer</p>
                <h1><span>Bakun</span> Viktoryia</h1>

            </div>
            <div className={s.photo}></div>
            </div>
        </div>

    );
}

export default Main;
