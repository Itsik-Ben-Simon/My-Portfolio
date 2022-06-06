import React from 'react'
import "./About.css";
import { Link } from 'react-router-dom'; 
import CV from "../images/Itsik Ben Simon CV.pdf";
import photo from "../images/image_23.png"

function About () {
  return (
   
   <>
    <div className='about-bg' style={{ backgroundImage: `url(${photo})` }}>
    
     </div>

        <h1 className="About_header">
         About me
        </h1>
        <p className='About_paragraph'>My name is Itsik, and I am a  penetration tester.<br/>
        My job is to find security weakness and vulnerabilities<br/> and report them to management or other responsible parties.<br/>
        I enrolled in this course because I wanted to develop myself in addition<br/> to my help desk certification and to exploit my full potential.<br/>
        I enjoy new challenges and in my spare time <br/> I enjoy learning new skills such as building websites using "react" and learning python code.<br/>
        I also enjoy quality time with my family. <br/>
        What sets me apart is my perseverance and will of succeeding <br/>along with good learning capabilities and most of all curiosity.<br/>
        </p>
        <div className="About_button"> 
        <a href={CV} download="Itsik Ben Simon CV.pdf"><button className="About btn">Download CV</button></a>
        <Link to="/GetInTouch"><button className="About btn">GetInTouch</button></Link>


        </div>

       


        


        
      
   </> 
  );

}
export default About;