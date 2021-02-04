import React from 'react'
import s from './Skill.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function Skill(props) {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <FontAwesomeIcon icon={props.icon}
                                 size={'5x'}
                                 color={'#b796d9'}/>
                <img src={props.src}/>
            </div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <span className={s.skillDescription}>{props.description}</span>
        </div>

    );
}

export default Skill;
