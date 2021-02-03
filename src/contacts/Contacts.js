import React from 'react'
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'
import Button from "../common/Button";
import Title from "../components/title/Title";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
              <Title text='Contacts'/>
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