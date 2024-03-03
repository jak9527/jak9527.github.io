import './Projects.css'
import { ProjectLinkComponent } from "./Home.js";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function ProjectsBoard(){
    return(
        <div style={{display:'flex', paddingTop:"20px"}}>
            <div style={{margin:'auto', width:'80%', textAlign:"center"}}>
                <h1 style={{fontSize:'300%'}}>Projects</h1>
                <hr style={{width: "100%", color: "#676367;"}}></hr>
                <div className='ProjectGrid'>
                    <div className='GridComponent'><ProjectLinkComponent 
                        title="Slimecrafter"
                        description="A Minecraft mod built in Java for the fabric modloader"
                        image={require("../images/controller.png")}
                        url="https://github.com/jak9527/Slimecrafter"/></div>
                    <div className='GridComponent'><ProjectLinkComponent 
                        title="Mock E-Store"
                        description="An angular based web app that 'Sells' some of RIT's most recognizable monuments"
                        image={require("../images/Webapp.png")}
                        url="https://github.com/jak9527/RIT-Mock-EStore"/></div>
                    <div className='GridComponent'><ProjectLinkComponent 
                        title="Puzzle Solver"
                        description="Customizable Puzzle solver, implementation of BFS with pruning for solving puzzles"
                        image={require("../images/console.png")}
                        url="https://github.com/jak9527/Customizable_Game_Puzzle_Solver"/></div>
                    <div className='GridComponent'><ProjectLinkComponent 
                        title="Personal Website"
                        description="You're on it right now, and they say a picture speaks a thousand words. Are they good ones?"
                        image={require("../images/Webapp.png")}
                        url="https://github.com/jak9527/jak9527.github.io"/></div>
                </div>
                <hr style={{width: "100%", color: "#676367;"}}></hr>
            </div>
        </div>
    )
}


function Projects(){
    return (
        <div className='PageContainer'>
            <div className='ProjectsPageBackground'>
                <ProjectsBoard/>
            </div>
        </div>
    );
}

export default Projects;