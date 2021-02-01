import React from 'react'
import s from './Main.module.css'
import sContainer from '../common/styles/Container.module.css'


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
            <div className={s.text}>
                <h1><span>Bakun</span> Viktoryia</h1>
                <p>Frontend React & Redux Developer</p>
            </div>
            <div className={s.photo}>


            </div>
            </div>
        </div>

    );
}

export default Main;
