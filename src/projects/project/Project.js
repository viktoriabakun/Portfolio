import React from 'react'
import s from './Project.module.scss'

function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.projectImg} style={props.style}>
                <a className={s.viewMore} href='/'>view more</a>
            </div>
            <h4 className={s.projectTitle}>{props.title}</h4>
            <span className={s.projectDescription}>{props.description}</span>
        </div>

    );
}

export default Project;