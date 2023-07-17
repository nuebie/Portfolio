import React, {useContext} from "react";
import "../css/navbar.css"
import logo from '../../assets/images/portfoliologo.png'
import { context } from "../../App";
import { Link, Element, scroller } from 'react-scroll';
import {motion} from 'framer-motion'

export default function Navbar(){
    const {scrollToSection} = useContext(context);
    const variant = {
        hover:{scale:1.2,textShadow:'0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF'}
    }

    return(
        <div className="NavbarSection">
            <div className="NavbarContainer">
                <div className="NavbarLinks">
                    <img className="NavbarLogo" src={logo}/>
                    <ul className="NavbarList">
                        <motion.li  variants={variant} whileHover="hover" onClick={() => scrollToSection('home')}>Home</motion.li>
                        <motion.li variants={variant} whileHover="hover" onClick={() => scrollToSection('about')}>About</motion.li>
                        <motion.li variants={variant} whileHover="hover" onClick={() => scrollToSection('works')}>Works</motion.li>
                        <motion.li variants={variant} whileHover="hover" onClick={() => scrollToSection('technologies')}>Technologies</motion.li>
                        <motion.li variants={variant} whileHover="hover" onClick={() => scrollToSection('contact')}>Contact</motion.li>
                    </ul>
                </div>
            </div>
        </div>
    )
}