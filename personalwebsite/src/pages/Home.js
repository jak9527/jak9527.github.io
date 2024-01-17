import './Home.css'
import '../images/barcart.jpg'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

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

function Home(){
    return (
        <div>
            <div className='Homepage'>
            <AboutSummary />
            </div>
            
        </div>
    );
}

export default Home;