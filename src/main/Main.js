import React from 'react'
import s from './Main.module.css'
import sContainer from '../common/styles/Container.module.css'
import me from '../assets/img/me.jpg'
import Particles from "react-particles-js";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

let ParticleParamsDots ={
    particles: {
        size: {
            value: 1
        },
        line_linked: {
            enable: false,
        }
    }
}

let ParticleParamsLines ={
    particles: {
        size: {
            value: 2
        },
        line_linked: {
            enable: true,
        }
    }
}

function Main() {
    return (
        <div id='main' className={s.mainBlock}>
            <Particles className={s.particles} params={ParticleParamsDots}/>
            <Particles className={s.particles}  params={ParticleParamsLines}/>
            <Fade bottom>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
            <div className={s.text}>
                <p><ReactTypingEffect text={'Frontend Developer'}
                                      speed={300}
                                      typingDelay={1000} cursor='_'/></p>
                <h1><span>Bakun</span> Viktoryia</h1>
            </div>
                <Tilt className='Tilt' options={{max: 20, speed: 4000}}>
                <img src={me} className={s.photo} alt='me'/>
                </Tilt>
            </div>

            </Fade>
        </div>

    );
}

export default Main;
