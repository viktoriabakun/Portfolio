import React from 'react'
import Fade from 'react-reveal/Fade';
import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill'
import Title from "../components/title/Title";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import {faServer, faSitemap} from "@fortawesome/free-solid-svg-icons";
import typescript from '../assets/img/typescript.svg'


function Skills() {
    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title text='Skills'/>
                <Fade right>
                    <div className={s.skills}>
                        <Fade left>
                            <Skill title={'React'}
                                   isIcon={true}
                                   icon={faReact}
                                   description={'SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination...'}/>
                        </Fade>
                        <Fade left>
                            <Skill title={'Redux'}
                                   isIcon={true}
                                   icon={faSitemap}
                                   description={'Thunk, ThunkCreator, Reducer, Hooks, Selectors, State Management, Immutability...'}/>
                        </Fade>
                        <Fade left>
                            <Skill title={'REST API'}
                                   isIcon={true}
                                   icon={faServer}
                                   description={'CRUD Operations, working with Axios library...'}/>
                        </Fade>
                        <Fade left>
                            <Skill title={'TypeScript'}
                                   isIcon={false}
                                   src={typescript}
                                   description={'Migrate projects from JS to TS, Generics, typeof, ReturnType, Enum...'}/>
                        </Fade>
                        <Fade left>
                            <Skill title={'JavaScript'}
                                   isIcon={true}
                                   icon={faJs}
                                   description={'Data Types, Functions, Loops, Currying, Closure, This, Array Methods, Recursion, EventLoop, Promise, Async-Await...'}/>
                        </Fade>
                        <Fade left>
                            <Skill title={'HTML'}
                                   isIcon={true}
                                   icon={faHtml5}
                                   description={'Landing Pages, Semantic tags, Forms...'}/>
                        </Fade>
                        <Fade left>
                            <Skill title={'Css'}
                                   isIcon={true}
                                   icon={faCss3Alt}
                                   description={'CSS3, CSS-Modules, Styled Components...'}/>
                        </Fade>

                    </div>
                </Fade>
            </div>
        </div>

    );
}

export default Skills;
