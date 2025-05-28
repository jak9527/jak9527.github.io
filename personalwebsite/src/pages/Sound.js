import './Sound.css'

function Sound(){
    return (
        <div className='PageContainer'>
            <div className='SoundPageBackground'>
                <div style={{paddingTop:"20px"}}>
                    <div style={{margin:'auto', width:'80%', textAlign:"center"}}>
                        <h1 style={{fontSize:'300%'}}>Need a Sound Person?</h1>
                        <hr style={{width: "100%", color: "#676367;"}}></hr>
                        <p>Are you or your company looking for a sound designer, sound mixer, or foley artist? 
                            If so, please check out Sofia Carrera, a talented and hardworking sound designer with 
                            four years of experience and more than 25 projects under their belt!</p>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', outlineStyle: 'none', height:'37vh'}}>
                    <a href='https://sofiacarreramix.weebly.com/' target='_blank' rel="noopener noreferrer" style={{textDecoration:'none'}}><div className="SofLink">Sofia Carrera</div></a>
                </div>
            </div>
        </div>
    );
}

export default Sound