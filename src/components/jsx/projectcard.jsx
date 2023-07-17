import React from "react";
import {motion, AnimatePresence} from "framer-motion";
import githubLogo from "../../assets/images/github.png"

export default function ProjectCard(prop){
    const cardAnimVariant1 = {
        initial:{opacity:0, x:'-100vw', y:0},
        animate:{opacity:1, x:0},
        exit:{opacity: 0, x:'100vw'},
        transtion:{duration: '1.5s'}
    };

    const cardAnimVariant2 = {
        initial:{opacity:0, x:'100vw', y:0},
        animate:{opacity:1, x:0},
        exit:{opacity: 0, x:'100vw'},
        transtion:{duration: '1.5s'}
    };

    //Test
    const animate = {opacity:1, x:0};
    const transition = {duration: '1.5s'};
    const initialAnimationNext = {opacity: 0, x:'-100vw'};
    const exitAnimationNext = {opacity: 0, x:'100vw'};
    const initialAnimationPrev = {opacity: 0, x:'100vw'};
    const exitAnimationPrev = {opacity: 0, x:'-100vw'};

    return(
        <AnimatePresence>
            {prop.projData.id === prop.index && <motion.div className="projCard"
            initial={prop.previndex.current < prop.index? {opacity: 0, x:'-100vw'}: {opacity: 0, x:'100vw'}} 
            exit={prop.exitDirection === 'next'? {opacity: 0, x:'100vw'}: {opacity: 0, x:'-100vw'}} 
            animate={{opacity: 1, x: 0}}
            transition={{duration:1}}>
                {prop.projData.githubLink && 
                <a href={prop.projData.githubLink} target="_blank">
                <img src={githubLogo} className="githubLink"/>
                </a>}
                <img src={prop.projData.image} alt="" className="projImage"/>
                <div>
                    <h1>{prop.projData.projectName}</h1>
                    <p>{prop.projData.projectDescription}</p>
                    {prop.projData.demoLink && <a href={prop.projData.demoLink} target="_blank"><p>View Demo</p></a>}
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}