import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'


export const Nav = styled.nav`
  width:100%;
  display: flex;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  margin-left: 35%;
  flex-direction:column;
  
  
  @media (min-width: 700px) {
    height: 80px;
    
  }
    

  `;
 
export const NavLink = styled(Link)`
  
  
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  
  cursor: pointer;
  z-index: 2;
  
  &.active{
    color: #15cdfc;
  }
  @media (max-width: 700px){
    display: none;
   
  }

`;
export const NavLinkExtended = styled(Link)`
  display:inline-block;
  width:100%
  padding: 10px 40px;
  font-size: 1.5em;
  text-decoration: none;
  margin: 15px;
  color: white; 
  letter-spacing:2px;
 
  &.active{
    color: #15cdfc;
  }
 
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  z-index: 2;
  width: 100%;
  height: 80px;
  

 
  
}
`;



  
  
  
  

