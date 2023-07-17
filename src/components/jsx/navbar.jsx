import React, {useContext} from "react";
import "../css/navbar.css"
import logo from '../../assets/images/portfoliologo.png'
import { context } from "../../App";
import { Link, Element, scroller } from 'react-scroll';

export default function Navbar(){
    const {scrollToSection} = useContext(context);
    return(
        <div className="NavbarSection">
            <div className="NavbarContainer">
                <div className="NavbarLinks">
                    <img className="NavbarLogo" src={logo}/>
                    <ul className="NavbarList">
                        <li onClick={() => scrollToSection('home')}>Home</li>
                        <li onClick={() => scrollToSection('about')}>About</li>
                        <li onClick={() => scrollToSection('works')}>Works</li>
                        <li onClick={() => scrollToSection('technologies')}>Technologies</li>
                        <li onClick={() => scrollToSection('contact')}>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}