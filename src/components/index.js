import React from 'react'
import {FaGithub} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import my_photo from "../images/image_21.png";
import my_image from "../images/image_35.png";

import "./Home.css";

function Home () {
  return (
    <div>
      <h4 className="home__header">
          Hey, I'm 
      </h4>
       <h3 className='Home_name'>
          Itsik Ben Simon
       </h3>
       <h3 className='Home_job'>
          Penetration Tester
        </h3>
        
        
        
         <div className='my_image'>
           <img id="my_photo" src={my_image} alt = ""/>
           
        </div> 
        
        <div className='git_icon'>
        <a href="https://www.github.com/Itsik-Ben-Simon">
           < FaGithub size={"2em"} color={"black"}/>
        </a>
        
        </div>
        <div className='linkedin_icon'>

          <a href="https://www.linkedin.com/in/itsik-ben-simon">
          
          <FaLinkedinIn size={"2em"} color={"blue"} />
          </a>
        </div>
        <div className='home-bg' style={{ backgroundImage: `url(${my_photo})` }}>
    
    </div>
    </div>
  );

}
export default Home;