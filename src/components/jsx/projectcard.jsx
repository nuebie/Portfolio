import React from "react";
import {motion, AnimatePresence} from "framer-motion";
import githubLogo from "../../assets/images/github.png"

export default function ProjectCard(prop){
    const demoButtonAnimation = {
        initial: {
            y: 0,
          },
          animate: {
            y: [-10, 10, -5, 5, 0],
            transition: {
              duration: 1.5,
              ease: 'linear',
              times: [0, 0.2, 0.4, 0.6, 1],
              repeat: Infinity,
              repeatDelay: 3, // Pause between repetitions
            },
          },
          hover:{scale:1,textShadow:'0 0 4px lightgray, 0 0 6px lightgray, 0 0 8px lightgray'}
      };

    

    return(
        <AnimatePresence>
            {prop.projData.id === prop.index && <motion.div className="projCard"
            initial={prop.previndex.current < prop.index? {opacity: 0, x:'-100vw'}: {opacity: 0, x:'100vw'}} 
            exit={prop.exitDirection === 'next'? {opacity: 0, x:'100vw'}: {opacity: 0, x:'-100vw'}} 
            animate={{opacity: 1, x: 0, transition: { type: 'spring', duration: 1.5, bounce: 0.4 }}}
            >
                {prop.projData.githubLink && 
                <a href={prop.projData.githubLink} target="_blank">
                <motion.img src={githubLogo} className="githubLink" whileHover={{ scale: 1.2 }}></motion.img>
                </a>}
                <img src={prop.projData.image} alt="" className="projImage"/>
                <div>
                    <h1>{prop.projData.projectName}</h1>
                    <p>{prop.projData.projectDescription}</p>
                    {prop.projData.demoLink && <a href={prop.projData.demoLink} target="_blank">
                        <motion.p  initial="initial" animate="animate" variants={demoButtonAnimation} whileHover="hover">View Demo</motion.p>
                    </a>}
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}