import React from 'react';
import './header.css';
import CTA from './CTA';
import Headersocials from './Headersocials';
import ME from '../../assets/me2.png';
import {Fade} from 'react-reveal';
const header = () => {
  return (
    <header>
      <div className="container header-container">
      <Fade big>
        <h5>Hello I'm</h5>
        <h1>Nilava Pal</h1>
        <h5 className="text-light">Web Developer | UI Designer</h5>
      </Fade>
         <CTA/>  {/*Call to actions buttons */}
         
        <Headersocials/>    {/*social icons */}
        
        <div className="me">
        <Fade bottom big>
        <img src= {ME} alt="" srcset="" />
        </Fade>
        </div>
       
         <a href="#contact" className="scroll-down">Scroll Down</a> 
      </div>
    </header>
  ) 
}

export default header