import React from 'react'
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'
import Button from "../common/Button";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contactForm}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <Button buttonTitle={'Send'}/>
            </div>
        </div>
    );
}

export default Contacts;