import './About.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function EducationSection(){
    return (
        <div style={{display:'flex', paddingTop:"20px"}}>
            <div style={{margin:'auto', width:'80%', textAlign:"left"}}>
                <h1>About Me: Academics</h1>
                <p>
                    <img src='https://www.thoughtco.com/thmb/Kcc7pWog_NLfFlXh95qMNDRNMLM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/DramaticPerspective_0005-5364394aec3643c18086f16e475c84b2.jpg'
                    alt = 'bing' align="left" hspace="20px" style={{maxWidth:"30%"}}/>
                    <p>Hi! I'm Jacob Karvelis. I am a student at the Rochester Institute of Technology
                        persuing a BS in Computer Science. I have completed a wide variety of classes here at
                        RIT, many of which you can find on my <a className='inlineLink' href='https://docs.google.com/document/d/1rdM1jjWaU8nKLnmD517KlrZvQn4_5CG53vU_UKtSd2s/edit?usp=sharing'>resume</a>
                        . I have an interest in AI, Graphics,
                        and Data Management. I have projects relating to some of these topics, which you can
                        check out <Link to='/Projects' className='inlineLink'>here</Link> and on 
                        <a  className='inlineLink' href='https://github.com/jak9527'> my GitHub</a>.
                        I also built this website using React, hosted on GitHub pages. You can find the source for it in
                        this <a className='inlineLink' href='https://github.com/jak9527/jak9527.github.io'>repository</a>.
                    </p>
                        Outside of Computer Science, I am doing a Minor in Criminal Justice. I've taken classes on minority issues in the
                        criminal justice system, corrections, and about prostitution and vice. 
                    <p>
                                       
                    </p>
                    <p>
                        You can find me professionally at:
                        <div style={{display:"flex"}}>
                            <ul>
                                <li><a className='inlineLink' href='https://www.linkedin.com/in/jacob-karvelis'>LinkedIn</a></li>
                                <li><a className='inlineLink' href='https://github.com/jak9527/'>GitHub</a></li>
                                <li><a className='inlineLink' href='mailto:jak9527@rit.edu'>email</a></li>
                            </ul>
                        </div>
                        
                    </p>
                </p>
                
            </div>
        </div>
    )
}

function PersonalSection(){
    return (
        <div style={{display:'flex', backgroundColor:"#28152c", paddingBottom:"40px"}}>
            <div style={{margin:'auto', width:'80%', textAlign:"left"}}>
                <h1>About Me: Personally</h1>
                <p>
                    <img src='https://media.discordapp.net/attachments/1049383116302729368/1196939405965918288/20231219_211126.jpg?ex=65b973b0&is=65a6feb0&hm=7d0cdc4e84f749a0a69e4de9a385074b9f4856f008107f175e03c8caa8866bb2&=&format=webp&width=507&height=676'
                        alt = 'bing' align="left" hspace="20px" vspace="10px" style={{maxWidth:"30%"}}/>
                    <p>
                        I'm still Jacob, but I'm a little more relaxed now, haha. I use Any/All pronouns and I am a non-binary person.
                        My interests and hobbies include hiking, camping, playing videogames, and recently I have been getting into mixology.
                        I used to mess around making gaming YouTube videos when I was a younger, which if you ever interview me you can
                        see I still use the same audio setup. 
                    </p>
                    <p>
                        Nowadays I consume more media than I make. Right now I'm doing my
                        7th (8th?) watchthrough of futurama, and am watching the new Hulu episodes with some heavy reservation. I'm
                        also watching The X-Files, House MD, Star Trek TOS (I'm a pretty big Star-Trek fan), and Doctor Who. When it
                        comes to movies, my all time favorite has got to be Hot Fuzz, but I also loved Inglorious Basterds, Shaun of
                        the Dead, and Nemo.
                    </p>
                    <p>
                        Some games I'm currently playing include Minecraft (going on like 10 years now, so mods play a big role. You can check out one
                        I'm making <a className='inlineLink' href='https://github.com/jak9527/Slimecrafter'>here</a>), 7 Days to Die, and Lethal 
                        Company.
                    </p>
                    <p>
                        I've also hikes lots of pretty places. Being from Connecticut, I had access to a lot of beautiful mountains in driving distance.
                        One classic hike in CT is Talcott mountain. I don't have many pictures but if you look it up you're sure to find some gorgeous
                        views. I've also visited Acadia National Park a few times, and have hiked most of the mountains there, and I've even been the
                        first person in the continental United States to see the sun rise (Ask me about it!!!).
                    </p>
                </p>
            </div>
        </div>
    )
}

function About(){
    return (
        <div className="AboutPageBackground">
                <EducationSection/>
                <PersonalSection/>
        </div>
    );
}

export default About;