import React from 'react'
import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css'

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Viktoryia Bakun</h2>
                <div className={s.socialNetworks}>
                   <div className={s.networkItem}>icon</div>
                   <div className={s.networkItem}>icon</div>
                   <div className={s.networkItem}>icon</div>
                   <div className={s.networkItem}>icon</div>
                </div>
                <h3 className={s.copyright}>© 2020 All Rights Reserved</h3>
            </div>
        </div>
    );
}

export default Footer;