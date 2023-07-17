import React, {Suspense } from "react";
import { Decal, Float, OrbitControls, Preload, useTexture} from "@react-three/drei";
import {Canvas, useLoader} from '@react-three/fiber';
import Sphere from "../models_to_jsx/Sphere";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Tech from "../../assets/images/techdata";
import "../css/technologies.css";

export default function Technologies(){
    //const htmlTexture = useLoader(TextureLoader, '/html.png');

    return(
        <div className="SkillsSection">
            <div className="SkillsContainer">
                <div className="skillBalls">
                {Tech.map(tech => (
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className="skillBall">
                        <Sphere texture={tech.src}/>
                    </div>
                    </Suspense>
                ))}
                </div>
            </div>
        </div>
    )
}