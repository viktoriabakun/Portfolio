import React from 'react'
import Fade from 'react-reveal/Fade';

import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'
import Button from "../common/Button";
import Title from "../components/title/Title";

function Contacts() {
    return (
        <Fade left>
        <div id='contacts' className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
              <Title text='Contacts'/>
                <form className={s.contactForm}>
                    <input/>
                    <input/>
                    <textarea/>
                    <Button buttonTitle={'Send'}/>
                </form>
            </div>
        </div>
        </Fade>
    );
}

export default Contacts;