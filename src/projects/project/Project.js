import React from 'react'
import s from './Project.module.css'
import Button from "../../common/Button";

function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.projectImg}>
                <Button buttonTitle={'view more'}/>
            </div>

            <h4 className={s.projectTitle}>{props.title}</h4>
            <span className={s.projectDescription}>{props.description}</span>
        </div>

    );
}

export default Project;