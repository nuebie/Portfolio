import React, { useEffect, useRef, useState } from "react";
import projectData from "./projectData";
import ProjectCard from "./projectcard";
import "../css/works.css";

export default function Works(){
    const [index, setIndex] = useState(0);
    const [exitDirection, setExitDirection] = useState('next');
    const previndex = useRef(-1);
    const [projType, setProjType] = useState(projectData[0].projectType);

    function nextProject(){
        previndex.current = index != (projectData.length-1)? index: -1;
        setExitDirection('next');
        setIndex(current => current != (projectData.length-1)? current+1: 0);
        //alert(previndex.current);
    }

    function prevProject(){
        previndex.current = index != 0? index: projectData.length;
        setExitDirection('prev');
        setIndex(current => current != 0? current-1: (projectData.length-1));
        //alert(previndex.current);
    }

    useEffect(()=>{
        setProjType(projType => projectData[index].projectType);
    },[index])

    return(
        <div className="WorksSection">
            <div className="WorksContainer">
                <h1 className="projType">{projType}</h1>
                <div className="projCardContainer">
                    {projectData.map((projObj) =>(
                        <ProjectCard projData={projObj} index={index} previndex={previndex} exitDirection={exitDirection}/>
                    ))}
        
                    <button className="arrow left prevButton" onClick={prevProject}>
                            <svg width="60px" height="80px" viewBox="0 0 50 80">
                                <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
	                            45.63,75.8 0.375,38.087 45.63,0.375 "/>
                            </svg>  
                        </button>
                        <button className="arrow right nextButton" onClick={nextProject}>
                            <svg width="60px" height="80px" viewBox="0 0 50 80">
                                <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
	                            0.375,0.375 45.63,38.087 0.375,75.8 "/>
                            </svg>
                        </button>
                </div>
            </div>
        </div>
    )
}