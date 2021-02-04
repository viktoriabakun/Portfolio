import React from 'react'
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
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title text='Skills'/>
                <div className={s.skills}>

                    <Skill title={'React'}
                           icon={faReact}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s...'}/>
                    <Skill title={'Redux'}
                           icon={faSitemap}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s...'}/>
                    <Skill title={'REST API'}
                           icon={faServer}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s...'}/>
                    <Skill title={'TypeScript'}
                           src={typescript}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s...'}/>
                    <Skill title={'JavaScript'}
                           icon={faJs}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s...'}/>
                    <Skill title={'HTML'}
                           icon={faHtml5}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s...'}/>
                    <Skill title={'Css'}
                           icon={faCss3Alt}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s...'}/>
                </div>
            </div>
        </div>

    );
}

export default Skills;
