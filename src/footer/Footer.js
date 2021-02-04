import React from 'react'
import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css'
import {faGithub, faInstagram, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Viktoryia Bakun</h2>
                <div className={s.socialNetworks}>

                    <a target={'blank'}
                       href={'https://www.linkedin.com/in/viktoryiabakun/'}>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size={'2x'}
                            color={'#b796d9'}
                        />
                    </a>
                    <a target={'blank'}
                       href={'https://github.com/viktoriabakun'}>
                        <FontAwesomeIcon icon={faGithub}
                                         size={'2x'}
                                         color={'#b796d9'}
                        />
                    </a>
                    <a target={'blank'}
                       href={'https://t.me/Vusen'}>
                        <FontAwesomeIcon icon={faTelegram}
                                         size={'2x'}
                                         color={'#b796d9'}
                        />
                    </a>
                    <a target={'blank'}
                       href={'https://www.instagram.com/vusen_/?hl=ru'}>
                        <FontAwesomeIcon icon={faInstagram}
                                         size={'2x'}
                                         color={'#b796d9'}
                        />
                    </a>
                </div>
                <h3 className={s.copyright}>© 2020 All Rights Reserved</h3>
            </div>
        </div>
    );
}

export default Footer;