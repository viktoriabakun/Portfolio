import React from 'react'
import s from './Project.module.css'

function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.projectImg}>img</div>
            <button className={s.button}>view more</button>
            <h4 className={s.projectTitle}>{props.title}</h4>
            <span className={s.projectDescription}>{props.description}</span>
        </div>

    );
}

export default Project;