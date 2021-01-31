import React from 'react'
import s from './Header.module.css'
import Nav from "../nav/Nav";
import sContainer from "../common/styles/Container.module.css";


function Header() {
    return (
        <div className={s.header}>
            <div className={`${sContainer.container} ${s.container}`}>
            <Nav/>
            </div>
        </div>

    );
}

export default Header;
