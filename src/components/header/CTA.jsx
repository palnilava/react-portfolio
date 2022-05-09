import React from 'react';
import CV from '../../assets/cv.pdf';
import {Fade} from 'react-reveal';
const CTA = () => {
  return (
    <div className='cta'>
      <Fade left> 
      <a href={CV} download className='btn' target="_blank">Download CV</a> 
      </Fade>
      <Fade right> 
      <a href="#contact" className='btn btn-primary'>Let's Talk</a> 
      </Fade>
    </div>
  )
}

export default CTA
