import React from 'react'
import {
   Nav, 
   NavLink, 
   NavMenu,
   } 
   from './NavbarElement';
 import './Navbar.css' ;

 function Navbar() {
  return(
    <>
      <Nav>
         <NavMenu >
            <NavLink to="/" className={"Nav-btn"} style={{ textDecoration: 'none' }}>
               Home
            </NavLink>
            <NavLink to="/About"className={"Nav-btn"}  style={{ textDecoration: 'none' }}>
               About
            </NavLink>
            <NavLink to="/Skills"className={"Nav-btn"}  style={{ textDecoration: 'none' }}>
               Skills
            </NavLink>
            <NavLink to="/projects" className={"Nav-btn"} style={{ textDecoration: 'none' }}> 
               Projects
            </NavLink>
            <NavLink to="/GetInTouch" className={"Nav-btn"} style={{ textDecoration: 'none' }}>
               GetInTouch
            </NavLink>
            </NavMenu>
      </Nav>
      
    </>
  
  );    
      
      
}    
export default Navbar;  