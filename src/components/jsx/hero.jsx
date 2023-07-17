import React,{useContext} from "react";
import "../css/hero.css"
import {Canvas} from '@react-three/fiber';
import Navbar from "./navbar";
import Earth from '../models_to_jsx/Earth'
import { context } from "../../App";
import {motion} from 'framer-motion'

export default function Hero(){
    const {scrollToSection} = useContext(context);

    const buttonAnimation = {
        initial: {
          y: 0,
          transition: { duration: 0 },
        },
        hover: {
          y: [-10, 10, -5, 5, 0], // Keyframes for vertical movement
          transition: { duration: 0.5, ease: 'linear', times: [0, 0.2, 0.4, 0.6, 1] }, // Tempo changes
        },
      };


    return(
        <div className="HeroSection">
            <Navbar/>
            <div className="HeroContainer">
                <div className={'HeroLeft'}>
                    <h1 className="HeroTitle">"Hello World"</h1>
                    <div className="HeroDesc">
                        Versatile developer crafting digital experiences with experience <br/>
                        in frontend and backend technologies. Discover more about my <br/> 
                        skills, projects, and journey.
                    </div>
                    <motion.button whileHover="hover" initial="initial" animate="initial" variants={buttonAnimation} className="HeroButton" onClick={() => scrollToSection('about')}>Learn More</motion.button>
                </div>
                
                <div className={'HeroRight'}>
                    <Canvas camera={{ fov: 60, zoom: 1, near: 1, far: 1000}}>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Earth scale={[0.4,0.4,0.4]}/>   
                    </Canvas>
                </div>
            
            </div>
        </div>
    )
}