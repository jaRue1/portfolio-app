import React from 'react'
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome"; 
import { faGithub, faAmazon, faReact, faVuejs, faGoogle} from '@fortawesome/free-brands-svg-icons'
import {  faDatabase, faCloud} from '@fortawesome/free-solid-svg-icons';
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
                <p>I am familiar with git and follow the best practices when developing software such as branching, testing, and resolving merge conflicts. </p>
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
        <div className= 'container'>
          <div className='row'>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className='icon' icon={faVuejs} size="2x"/></div>
                <h3>Vue</h3>
                <p>I have built serval applications user interface's using this framework</p>
              </div>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className='icon' icon={faCloud} size="2x"/></div>
                <h3>Nest Js</h3>
                <p>I am familiar with this backend js framework, I have built monolithic api's and microservice's using this framework </p>
              </div>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className='icon' icon={faGoogle} size="2x"/></div>
                <h3>GCP</h3>
                <p> Familiar with GCP and its different services, I also have deployed apps using GCP.</p>
              </div>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className='icon' icon={faDatabase} size="2x"/></div>
                <h3>Postgres</h3>
                <p> Very familiar with SQL and have work extensively with Postgres DB in enterprise environments .</p>
              </div>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Services
