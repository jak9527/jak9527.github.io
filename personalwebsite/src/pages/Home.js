import './Home.css'
// import '../images/barcart.jpg'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


// About Summary Components
function AboutSummary(){
    return (
        <div style={{display:"flex"}}>
            <div className='AboutSummaryGrid'>
                <HeadshotComponent />
                <AboutTitleComponent />
                <AboutTextComponent />
            </div>
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
        <div style={{width:"100%"}}>
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
export function ProjectLinkComponent(props){
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
                        <div className='ProjectLinkHolder'><ProjectLinkComponent 
                            title="Slimecrafter"
                            description="A Minecraft mod built in Java for the fabric modloader"
                            image={require("../images/controller.png")}
                            url="https://github.com/jak9527/Slimecrafter"/></div>
                        <div className='ProjectLinkHolder'><ProjectLinkComponent 
                            title="Mock E-Store"
                            description="An angular based web app that 'Sells' some of RIT's most recognizable monuments"
                            image={require("../images/console.png")}
                            url="https://github.com/jak9527/RIT-Mock-EStore"/></div>
                        <div className='ProjectLinkHolder'><ProjectLinkComponent 
                            title="Puzzle Solver"
                            description="Customizable Puzzle solver, implementation of BFS with pruning for solving puzzles"
                            image={require("../images/Webapp.png")}
                            url="https://github.com/jak9527/Customizable_Game_Puzzle_Solver"/></div>
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