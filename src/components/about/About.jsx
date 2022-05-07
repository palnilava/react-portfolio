import React from 'react'
import './about.css'
import {Fade} from 'react-reveal';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import ME from '../../assets/me-about (2).jpg';
const About = () => {
  return (
    <section id='about'>
      <Fade bottom big>
      <h5>Get to know me</h5>
      <h2>About me</h2>

      <div className="container about-container">
       
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME}  srcset="" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
           <FaAward className='about-icon'/>
            <h5>Experience</h5>
            <small>1+ years</small>
            </article>

            <article className="about-card">
           <FiUsers className='about-icon'/>
            <h5>Clients</h5>
            <small>10+ clients </small>
            </article>

            <article className="about-card">
           <VscFolderLibrary className='about-icon'/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
            </article>
          </div>
           <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero et amet ipsam maxime suscipit nobis eveniet aliquid obcaecati fugiat, non temporibus pariatur consectetur natus consequuntur tempora beatae modi. Totam, qui?
           </p>

           <a href="#contact" className='btn btn-primary'>Let's Talk</a> 
        
        </div>
      </div>
      </Fade>
    </section>
  ) 
}

export default About