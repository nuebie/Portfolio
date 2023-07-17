import React, { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { OrbitControls} from "@react-three/drei";
import {Canvas} from '@react-three/fiber';
import Moon from '../models_to_jsx/Moon'
import Stars from "../models_to_jsx/Stars";
import "../css/contact.css";


export default function Contact(){
    const form = useRef();

    function handleSubmit(e){
        e.preventDefault();

        emailjs.sendForm('service_oa8ndlv', 'template_zblet71', form.current, 'sMyic5wHKzNTqoHMy')
            .then((result) => {
          console.log(result.text);
            }, (error) => {
          console.log(error.text);
        });

        form.current.reset();
    }

    return(
        <div className="ContactSection">
            <Stars/>
            <div className="ContactContainer">
                <div className="ContactLeft">
                    <Canvas camera={{ fov: 90, zoom: 1, near: 1, far: 1000}}>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Moon scale={[0.17,0.17,0.17]}/>
                        <OrbitControls enableZoom={false}/>    
                    </Canvas>
                </div>
                <div className="ContactRight">
                    <form ref={form} onSubmit={handleSubmit}>
                        <h1>Contact Me</h1>
                        <input placeholder="Name" name="name"/>
                        <input placeholder="Email" name="email"/>
                        <textarea placeholder="Write your message" name="message"/>
                        <input type="submit" value="Send" className="submitButton"/>
                    </form>
                </div>
            </div>
        </div>
    )
}