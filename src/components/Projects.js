import React, { useState } from 'react';
import { ProjectsData } from './ProjectsData';
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi';
import  "./Projects.css";
  


const Projects = ({ slides }) => {
  const [current, setCurrent] = useState(0);
   slides= ProjectsData ;
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
   
  return (<>
    <h1 className='Projects_header'>My-projects</h1>
    <h1 className='Projects_h1'>(Press an image to get the code)</h1>
    <section className='slider'>
      <HiChevronDoubleLeft className='left-arrow' onClick={prevSlide} />
      <HiChevronDoubleRight className='right-arrow' onClick={nextSlide} />
      {ProjectsData.map((slide, index) => {
        return (
          
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (<a href={slide.url}>
              <img src={slide.image} alt='Projects image' className='image' />
            </a>)}
          
         </div>
         
        
        );
          
          
             } )}
    </section>
    </>
  );
};

export default Projects;