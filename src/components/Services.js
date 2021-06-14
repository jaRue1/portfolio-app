import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGithub, faAmazon, faReact,} from '@fortawesome/free-brands-svg-icons'
import {  faDatabase } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
  return (
    <div id='services' className='services'>
      <h2 className = 'services-heading'>Top Skills</h2>
        <div className= 'container'>
          <div className='row'>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className='icon' icon={faReact} size="2x"/></div>
                <h3>React</h3>
                <p>I have built serval applications user interface's using this framework</p>
              </div>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className='icon' icon={faGithub} size="2x"/></div>
                <h3>Git</h3>
                <p>I have worked on larger projects and resolve complex merge conflicts. </p>
              </div>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className='icon' icon={faAmazon} size="2x"/></div>
                <h3>AWS</h3>
                <p> Familiar with AWS and its different services, I also have built production environments using AWS as my VPC.</p>
              </div>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className='icon' icon={faDatabase} size="2x"/></div>
                <h3>Mongo DB</h3>
                <p> I have built and used Mongo in several applications with Cloud Atlas.</p>
              </div>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Services
