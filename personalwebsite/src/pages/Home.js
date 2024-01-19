import './Home.css'
// import '../images/barcart.jpg'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


// About Summary Components
function AboutSummary(){
    return (
        <div className='AboutSummaryComponent'>
            <HeadshotComponent />
            <AboutTitleComponent />
            <AboutTextComponent />
        </div>
    )
}

function HeadshotComponent(){
    return (
        <div className='HeadshotImage'></div>
    )
}

function AboutTitleComponent(){
    return (
        <div>
            <p className='TitleText'>Hi, I'm<br></br>
            Jacob Karvelis</p>
            <Link to="/about" className="TitleLink">About Me</Link>
        </div>
    )
}

function AboutTextComponent(){
    return (
        <div className='AboutTextComponent'>
            Hi! I'm Jacob Karvelis, a Computer Science Major at RIT. I have an interest in AI, Graphics, and Data Management.
        </div>
    )
}  

// Project Summary Components
/**
 * 
 * @param {*} props Properties. Used to pass in project name and
 *                  description, as well as the actual link
 * @returns 
 */
function ProjectLinkComponent(props){
    return(
        <a className='ProjectLinkBackground' href={props.url} target="_blank" rel="noreferrer">
            <img className='ProjectImage' src={props.image} alt='bing'></img>
            <div className='ProjectTextContainer'>
                <p className='ProjectTitle'>{props.title}</p>
                <p className='ProjectDesc'>{props.description}</p>
            </div>
        </a>
    )
}

function ProjectSummaryComponent(){
    return(
        <div className='ProjectSummaryBackground'>
            <div style={{marginTop:"auto", marginBottom:"auto", width:"100%", height:"fit-content", marginLeft:"auto", marginRight:"auto"}}>
                <Link className='ProjectSummaryTitle' to="/projects">Projects</Link>
                <hr style={{width: "80%", color: "#676367;"}}/>
                <div style={{display: "flex", width:"100%"}}>
                    <div className='ProjectLinkContainer'>
                        <ProjectLinkComponent 
                            title="Slimecrafter"
                            description="A Minecraft mod built in Java for the fabric modloader"
                            image="https://media.discordapp.net/attachments/1049383116302729368/1197992239973027890/controller.png?ex=65bd4837&is=65aad337&hm=60c145aa674c0f1c3c734db13e7f9713ece3091fca5cdffa0068baca8a50a39c&=&format=webp&quality=lossless&width=533&height=670"
                            url="https://github.com/jak9527/Slimecrafter"/>
                        <ProjectLinkComponent 
                            title="Mock E-Store"
                            description="An angular based web app that 'Sells' some of RIT's most recognizable monuments"
                            image="https://media.discordapp.net/attachments/1049383116302729368/1198018168657031268/Webapp.png?ex=65bd605d&is=65aaeb5d&hm=95b5bb3977c090cc39b3d67d6e82aa693070eb0d58234db22e2c01a038ec20ff&=&format=webp&quality=lossless&width=522&height=668"
                            url="https://github.com/jak9527/RIT-Mock-EStore"/>
                        <ProjectLinkComponent 
                            title="Puzzle Solver"
                            description="Customizable Puzzle solver, implementation of BFS with pruning for solving puzzles"
                            image="https://media.discordapp.net/attachments/1049383116302729368/1197988456614330388/console.png?ex=65bd44b1&is=65aacfb1&hm=e207eec37058fd4cba14f00117357ed9888094761dc1b437925e98cd0f30c870&=&format=webp&quality=lossless&width=522&height=668"
                            url="https://github.com/jak9527/Customizable_Game_Puzzle_Solver"/>
                    </div> 
                </div>
                <hr style={{width: "80%", color: "#676367;"}}/>
                <p>For more projects, please see the projects page</p>
            </div>
            
        </div>
    )
}


/**
 * Page component. This is what is actually displayed
 */
function Home(){
    return (
        <div>
            <div className='Homepage'>
                <AboutSummary />
                <ProjectSummaryComponent />
            </div>
        </div>
    );
}

export default Home;