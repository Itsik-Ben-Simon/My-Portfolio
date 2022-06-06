import emailjs from "emailjs-com";
import React from 'react';
import "./GetInTouch.css";
import photo from "../images/image_15.png"
const GetInTouch =  () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_lq1ej6w','template_8m7twji', e.target,"eszFDnIFwUGZCp2D-").then(res=>{console.log(res);}).catch(err=> console.log(err));
  }
  return (
    
     <div className='container_border' style={{ backgroundImage: `url(${photo})` }}>
    
    
      
      <h1 className="GIT_header">Get In Touch</h1>
       <form className='contact_form' onSubmit={sendEmail}>
         
         <input type="text" name="name" className='form-control' placeholder="Your name *"/>

         
         <input type="email" name="user_email" className='form-control' placeholder="Your email *"/>

         
         <input type="text"  className='form-control' placeholder="Write a subject *" />

         
         
         
         <textarea name="message" className='form-control' placeholder="Write Your message"></textarea>
         <input type="submit" value="Boom" className='form-control btn btn-danger' style={{ marginTop: "30px"   }} />
       </form>

    </div>
  )

}
export default GetInTouch;