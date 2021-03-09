import React from 'react'
import Fade from 'react-reveal/Fade';
import s from './Projects.module.scss'
import sContainer from '../common/styles/Container.module.css'
import Project from './project/Project';
import Title from '../components/title/Title';
import todoImg from '../assets/img/todo_list.jpg'
import socialImg from '../assets/img/social_network.jpg'
import singoloImage from '../assets/img/singolo.jpg'
import cardsImg from '../assets/img/cards.jpg'

function Projects() {

    const socialNetworkImg = {
        backgroundImage: `url(${socialImg})`
    }
    const todoListImg = {
        backgroundImage: `url(${todoImg})`
    }
    const singoloImg = {
        backgroundImage: `url(${singoloImage})`
    }
    const cards = {
        backgroundImage: `url(${cardsImg})`
    }

    return (
        <Fade>
        <div id='projects' className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title text='Projects'/>
                <div className={s.projects}>
                    <Project title={'Social network'}
                             href={'https://github.com/viktoriabakun/Social-Network-Samurai'}
                             description={'A social networking service. An online platform for people to build social networks or social relationships with other people. '}
                             technologies={'React, Redux, Redux-Form, REST API, Typescript, CSS-Modules'}
                             style={socialNetworkImg}
                    />

                    <Project title={'ToDoList'}
                             href={'https://viktoriabakun.github.io/ToDoList/'}
                             description={'An app for Task Management, Project Management, Productivity. '}
                             technologies={'React, Redux, REST API, Typescript, Formik, Material-UI, Storybook, Unit-tests'}
                             style={todoListImg}
                    />

                    <Project title={'Singolo'}
                             href={'https://viktoriabakun.github.io/singolo/'}
                               description={'A Pixel Perfect Landing Page. '}
                             technologies={'HTML5, CSS3, JavaScript'}
                               style={singoloImg}
                />

                    <Project title={'Cards'}
                             href={'https://github.com/m-marc/cards-nya'}
                             technologies={'React, Redux, Typescript, REST API, Styled Components...This app is in progress'}
                             description={'This project is being developed now by me and a team of talented creators. It will help to learn new things with the usage of cards, where, for instance, on the first side can be a word and on the other side -- a definition. '}
                             style={cards}
                    />
                </div>
            </div>
        </div>
        </Fade>

    );
}

export default Projects;