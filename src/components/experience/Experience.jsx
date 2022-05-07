import React from 'react';
import './experience.css';
import {BsPatchCheckFill}  from 'react-icons/bs';

const experience = () => {
  return (
    <section id='experience'>
      
      <h5>skills I posses</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
         <h3>Frontend Development</h3>
         <div className="experience-content">
          
           <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon'/>
            <div>  
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
           </article>

           <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon'/>
            <div>  
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>         
            </article>

           <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon'/>
            <div>  
            <h4>Javascript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
           </article>

           <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon'/>
            <div>  
            <h4>Boostrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
           </article>

           <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon'/>
            <div>  
            <h4>Talwind</h4>
            <small className='text-light'>Intermediate</small>
            </div>
           </article>

           <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon'/>
            <div>  
            <h4>React JS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
           </article>
         </div>
        </div>
       {/* ----------end of front end----------- */}
        <div className="experience-ui">
        <h3>UI/UX Designing</h3>
        <div className="experience-content">
          
          <article className='experience-details'>
           <BsPatchCheckFill className='experience-detail-icon'/>
           <div>  
           <h4>Sketch</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>

          <article className='experience-details'>
           <BsPatchCheckFill className='experience-detail-icon'/>
           <div>  
           <h4>Marvel</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>

          <article className='experience-details'>
           <BsPatchCheckFill className='experience-detail-icon'/>
           <div>  
           <h4>Proto.io</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>

          <article className='experience-details'>
           <BsPatchCheckFill className='experience-detail-icon'/>
           <div>  
           <h4>Adobe XD</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>

          <article className='experience-details'>
           <BsPatchCheckFill className='experience-detail-icon'/>
           <div>  
           <h4>Figma</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>

        </div>
        </div>
      </div>

    </section>
  ) 
}

export default experience