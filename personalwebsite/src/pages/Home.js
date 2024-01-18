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


/**
 * Page component. This is what is actually displayed
 */
function Home(){
    return (
        <div>
            <div className='Homepage'>
                <AboutSummary />
                <ProjectLinkComponent 
                title="bingus"
                description="Gusics Gusics GusicsGusics Gusics Gusics Gusics Gusics"
                image="https://media.discordapp.net/attachments/1049383116302729368/1196939405965918288/20231219_211126.jpg?ex=65b973b0&is=65a6feb0&hm=7d0cdc4e84f749a0a69e4de9a385074b9f4856f008107f175e03c8caa8866bb2&=&format=webp&width=502&height=670"
                url="https://www.w3schools.com/html/html_links.asp"/>
            </div>
        </div>
    );
}

export default Home;