import React from 'react'
import s from './Projects.module.scss'
import sContainer from '../common/styles/Container.module.css'
import Project from './project/Project';
import Title from '../components/title/Title';
import todoImg from '../assets/img/todo_list.jpg'
import socialImg from '../assets/img/social_network.jpg'

function Projects() {

    const socialNetworkImg = {
        backgroundImage: `url(${socialImg})`
    }
    const todoListImg = {
        backgroundImage: `url(${todoImg})`
    }

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title text='Projects'/>
                <div className={s.projects}>
                    <Project title={'Social network'}
                             description={'A social networking service (also social networking site or social media) is an online platform which people use to build social networks or social relationships with other people who share similar personal or career interests, activities, backgrounds or real-life connections.'}
                             style={socialNetworkImg}
                    />

                    <Project title={'ToDoList'}
                             description={'ToDoList is software in the category of Task Management, Project Management, Productivity, “Getting Things Done” (GTD), Scheduling, and Collaboration'}
                             style={todoListImg}
                    />
                </div>
            </div>
        </div>

    );
}

export default Projects;