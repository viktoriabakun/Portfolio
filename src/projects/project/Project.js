import React from 'react'
import s from './Project.module.css'
import Button from "../../common/Button";

function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.projectImg}>img</div>
            <Button buttonTitle={'view more'}/>
            <h4 className={s.projectTitle}>{props.title}</h4>
            <span className={s.projectDescription}>{props.description}</span>
        </div>

    );
}

export default Project;