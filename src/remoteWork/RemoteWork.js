import React from 'react'
import s from './RemoteWork.module.css'
import sContainer from "../common/styles/Container.module.css";
import Button from "../common/Button";

function RemoteWork() {
    return (
        <div className={s.remoteBlock}>
            <div className={`${sContainer.container} ${s.remoteWorkContainer}`}>
                <h2>I consider opportunities for remote work</h2>
                <Button buttonTitle={'Hire me'}/>
            </div>

        </div>

    );
}

export default RemoteWork;