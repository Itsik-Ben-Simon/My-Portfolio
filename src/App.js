import React from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components";
import About from "./components/About";
import Skills from "./components/Skills";
import GetInTouch from "./components/GetInTouch";
import Projects from './components/Projects';
import PopupBar from "./components/Sidebar/sidebar"


function App(){

  return(
    <>
   
    <Router>

      
     <PopupBar />
      <Navbar />
      <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/GetInTouch' element={<GetInTouch />} />
        <Route path='/Projects' element={<Projects />} />

      </Routes>
      
    </Router>
    
    </>
   
  );    
}      
export default App;   
      
    
    


  



  

    
      




