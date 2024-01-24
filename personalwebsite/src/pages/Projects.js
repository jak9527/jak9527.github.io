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
                        image="https://media.discordapp.net/attachments/1049383116302729368/1197992239973027890/controller.png?ex=65bd4837&is=65aad337&hm=60c145aa674c0f1c3c734db13e7f9713ece3091fca5cdffa0068baca8a50a39c&=&format=webp&quality=lossless&width=533&height=670"
                        url="https://github.com/jak9527/Slimecrafter"/></div>
                    <div className='GridComponent'><ProjectLinkComponent 
                        title="Mock E-Store"
                        description="An angular based web app that 'Sells' some of RIT's most recognizable monuments"
                        image="https://media.discordapp.net/attachments/1049383116302729368/1198018168657031268/Webapp.png?ex=65bd605d&is=65aaeb5d&hm=95b5bb3977c090cc39b3d67d6e82aa693070eb0d58234db22e2c01a038ec20ff&=&format=webp&quality=lossless&width=522&height=668"
                        url="https://github.com/jak9527/RIT-Mock-EStore"/></div>
                    <div className='GridComponent'><ProjectLinkComponent 
                        title="Puzzle Solver"
                        description="Customizable Puzzle solver, implementation of BFS with pruning for solving puzzles"
                        image="https://media.discordapp.net/attachments/1049383116302729368/1197988456614330388/console.png?ex=65bd44b1&is=65aacfb1&hm=e207eec37058fd4cba14f00117357ed9888094761dc1b437925e98cd0f30c870&=&format=webp&quality=lossless&width=522&height=668"
                        url="https://github.com/jak9527/Customizable_Game_Puzzle_Solver"/></div>
                    <div className='GridComponent'><ProjectLinkComponent 
                        title="Personal Website"
                        description="You're on it right now, and they say a picture speaks a thousand words. Are they good ones?"
                        image="https://media.discordapp.net/attachments/1049383116302729368/1198018168657031268/Webapp.png?ex=65bd605d&is=65aaeb5d&hm=95b5bb3977c090cc39b3d67d6e82aa693070eb0d58234db22e2c01a038ec20ff&=&format=webp&quality=lossless&width=522&height=668"
                        url="https://github.com/jak9527/Customizable_Game_Puzzle_Solver"/></div>
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