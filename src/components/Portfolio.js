import React from 'react'
import netflix from '../images/netflix.png'
import portfolio from '../images/portfolio.png'
import cityGuide from '../images/city-guide-app.png'
import taskManager from '../images/task-manager.png'
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import {PopupboxManager, PopupboxContainer} from "react-popupbox";


// Project Linkx
const openPopupboxLinkx = () => {
  const content = (
  <>
  <img src={netflix} alt="linkx"/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum necessitatibus ratione praesentium </p>
  <b>Demo</b><a className="hyper-link" onClick= {() => window.open("http://majorlinkx.io-app.s3-website-us-east-1.amazonaws.com/")}>http://majorlinkx.io-app.s3-website-us-east-1.amazonaws.com/</a>
  </>
  )
  PopupboxManager.open({content})
  
} 
//  popupboxConfigLinkx ={}

function Portfolio() {
  return (
   <div className="portfolio-wrapper">
     <div className="container">
       <div className="h1 text-uppercase text-center py-5">portfolio</div>
       <div className="image-box-wrapper">
         
        <div className="portfolio-image-box" onClick={openPopupboxLinkx}>
          <img className="portfolio-images" src={netflix} alt="Desktop app" />
          <div className="overflow"></div>
          <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
       
       {/*  */}
      
        <div className="portfolio-image-box">
         <img className="portfolio-images" src={cityGuide} alt="restaurant web app" />
         <div className="overflow"></div>
         <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
       
       {/*  */}
       
        <div className="portfolio-image-box">
         <img className="portfolio-images" src={portfolio} alt="portolio web app" />
         <div className="overflow"></div>
         <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
    
       {/*  */}
      
        <div className="portfolio-image-box">
         <img className="portfolio-images" src={taskManager} alt="majorlinkx web app" />
         <div className="overflow"></div>
         <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
       </div>
     </div>
     {/* <PopupboxContainer {...popupboxConfigLinkx}/> */}
   </div>
  )
}
export default Portfolio