import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode, faMobile, faDatabase} from '@fortawesome/free-solid-svg-icons';
const Services = () => {
  return (
    <div className='services'>
      <h1 className = 'services-heading'>Services</h1>
        <div className= 'container'>
          <div className='row'>
            <div className="col-md-3 col-sm-5">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className='icon' icon={faFileCode} size="2x"/></div>
                <h3>Web Development </h3>
                <p>I approach each project individually and always focus on providing value while completing the objective</p>
              </div>
            </div> 
            <div className="col-md-3 col-sm-5">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className='icon' icon={faDesktop} size="2x"/></div>
                <h3>Web Design </h3>
                <p>I design with intention. Build with a purpose. Test for optimization.  </p>
              </div>
            </div> 
            <div className="col-md-3 col-sm-5">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className='icon' icon={faMobile} size="2x"/></div>
                <h3>Mobile Application</h3>
                <p> I build mobile applications for specific tasks and they are focused in nature.</p>
              </div>
            </div> 
            <div className="col-md-3 col-sm-5">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className='icon' icon={faDatabase} size="2x"/></div>
                <h3>Data Analytics</h3>
                <p> Familiar with Python and Pandas. Also selenium framework to automate task with bots.</p>
              </div>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Services
