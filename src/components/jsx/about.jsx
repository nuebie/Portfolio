import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import avatar from "../../assets/images/avatar.png"
import "../css/about.css"


export default function About(){
    return(
        <div className="AboutSection">
            <div className="AboutContainer">
                <div className="AboutLeft">
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={[2,2,2]}>
                            <MeshDistortMaterial
                                color="#6B3FA0"
                                attach="material"
                                distort={0.5}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <img src={avatar}/>
                </div>
                <div className="AboutRight">
                    <h1>Hi, I'm Emmanuell Manugas,</h1>
                    <p>
                        a computer science graduate, tech enthusiast and a versatile developer with a passion for learning and tinkering with new technologies. I have dabbled into various projects: web applications, desktop applications, machine learning, and game development. I'm always hungry for knowledge, staying on top of the latest trends.
                    </p>
                    <p>
                        Having a look at my portfolio is highly appreciated. If you have the time, lets chat!
                    </p>
                </div>
            </div>
        </div>
    )
}