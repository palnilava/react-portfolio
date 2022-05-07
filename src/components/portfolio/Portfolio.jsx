import React from 'react';
import './portfolio.css';
import img1  from  '../../assets/portfolio1.jpg';
import img2  from  '../../assets/portfolio2.jpg';
import img3  from  '../../assets/portfolio3.jpg';
import img4  from  '../../assets/portfolio4.jpg';
// import img5  from  '../../assets/portfolio5.png';
// import img6  from  '../../assets/portfolio6.jpg';
const portfolio = () => {
  return (
    
    <section id='portfolio'>

      <h5>What I do</h5>
      <h2>Work Samples</h2>

      
      <div className="container portfolio-container">

      <article className='portfolio-item'>
        <div className="portfolio-item-image">
          <img src= {img1} alt="" srcset="" />
        </div>
        <h3>Tesla Clone</h3>
        <div className="portfolio-item-cta">   
        <a href="#" className='btn'>Github</a>
        <a href="#" className='btn btn-primary' target='__blank'>Live Demo</a>
        </div>
      </article>

      <article className='portfolio-item'>
        <div className="portfolio-item-image">
          <img src= {img2} alt="" srcset="" />
        </div>
        <h3>Travels website</h3>
        <div className="portfolio-item-cta">   
        <a href="#" className='btn'>Github</a>
        <a href="#" className='btn btn-primary' target='__blank'>Live Demo</a>
        </div>
      </article>

      <article className='portfolio-item'>
        <div className="portfolio-item-image">
          <img src= {img3} alt="" srcset="" />
        </div>
        <h3>Youtube Clone</h3>
        <div className="portfolio-item-cta">   
        <a href="#" className='btn'>Github</a>
        <a href="#" className='btn btn-primary' target='__blank'>Live Demo</a>
        </div>
      </article>

      <article className='portfolio-item'>
        <div className="portfolio-item-image">
          <img src= {img4} alt="" srcset="" />
        </div>
        <h3>Virtual Clock</h3>
        <div className="portfolio-item-cta">   
        <a href="#" className='btn'>Github</a>
        <a href="#" className='btn btn-primary' target='__blank'>Live Demo</a>
        </div>
      </article>

      {/* <article className='portfolio-item'>
        <div className="portfolio-item-image">
          <img src= {img5} alt="" srcset="" />
        </div>
        <h3>Lorem ipsum dolor sit.</h3>
        <div className="portfolio-item-cta">   
        <a href="#" className='btn'>Github</a>
        <a href="#" className='btn btn-primary' target='__blank'>Live Demo</a>
        </div>
      </article>

      <article className='portfolio-item'>
        <div className="portfolio-item-image">
          <img src= {img6} alt="" srcset="" />
        </div>
        <h3>Lorem ipsum dolor sit.</h3>
        <div className="portfolio-item-cta">   
        <a href="#" className='btn'>Github</a>
        <a href="#" className='btn btn-primary' target='__blank'>Live Demo</a>
        </div>
      </article> */}


      </div>
    </section>

  ) 
}

export default portfolio