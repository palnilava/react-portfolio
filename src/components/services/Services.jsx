import React from 'react'
import './services.css'
import {BiCheck}  from 'react-icons/bi';

const services = () => {
  return (
    <section id='services'>
      
      
      <h5>What I offer</h5>
      <h2>My Services</h2>

      <div className="container services-container">
        <article className='service'>
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

          </ul>
        </article>
       {/* End Of UI/UX */}

       <article className='service'>
          <div className="service-head">
            <h3>Web Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

          </ul>
        </article>

        {/* END of WEB DEV */}
      
        <article className='service'>
          <div className="service-head">
            <h3>Marketing</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

              <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur  elit.</p>
              </li>

          </ul>
        </article>
       {/* END of Marketing */}
      </div>

    </section>
  ) 
}

export default services