import React from 'react'
import s from './Projects.module.css'
import sContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}> My projects</h2>
                <div className={s.projects}>
                    <Project title={'Social network'}
                             description={'A social networking service (also social networking site or social media) is an online platform which people use to build social networks or social relationships with other people who share similar personal or career interests, activities, backgrounds or real-life connections.'}/>
                    <Project title={'ToDoList'}
                             description={'ToDoList is software in the category of Task Management, Project Management, Productivity, “Getting Things Done” (GTD), Scheduling, and Collaboration'}/>
                </div>
            </div>
        </div>

    );
}

export default Projects;