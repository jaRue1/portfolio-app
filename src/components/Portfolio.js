import React from 'react'
import netflix from '../images/netflix.png'
import portfolio from '../images/portfolio.png'
import cityGuide from '../images/city-guide-app.png'
import taskManager from '../images/task-manager.png'
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"




function Portfolio() {

  // Project Linkx
const openPopupboxLinkx = () => {
  const content = (
  <>
  <h2>Majorlinkx.io project</h2>
  <img className="portfolio-image-popupbox" src={netflix} alt="linkx"/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum necessitatibus ratione praesentium </p>
  <b>Demo: </b><a className="hyper-link" onClick= {() => window.open("http://majorlinkx.io-app.s3-website-us-east-1.amazonaws.com/")}>Continue</a>
  </>
  )
  PopupboxManager.open({content})
  
}
const popupboxConfigLinkx = {
    titleBar: {
      enable: false,
      text: ""
    },
    fadeIn: true,
    fadeInSpeed: 500,
 } 


   // Restaurants web app
const openPopupboxRestaurants = () => {
  const content = (
  <>
  <img className="portfolio-image-popupbox" src={cityGuide} alt="Restaurants"/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum necessitatibus ratione praesentium </p>
  <b>Github: </b><a className="hyper-link" onClick= {() => window.open("https://github.com/jaRue1")}>Learn More</a>
  </>
  )
  PopupboxManager.open({content})
  
}
const popupboxConfigRestaurants = {
    titleBar: {
      enable: false,
      text: ""
    },
    fadeIn: true,
    fadeInSpeed: 500,
 } 

    // Portfolio web app
const openPopupboxPortfolio = () => {
  const content = (
  <>
  <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio"/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum necessitatibus ratione praesentium </p>
  <b>Github: </b><a className="hyper-link" onClick= {() => window.open("https://github.com/jaRue1")}>Learn More</a>
  </>
  )
  PopupboxManager.open({content})
  
}
const popupboxConfigPortfolio = {
    titleBar: {
      enable: false,
      text: ""
    },
    fadeIn: true,
    fadeInSpeed: 500,
 } 

    // Desktop web app
    const openPopupboxDesktop = () => {
      const content = (
      <>
      <img className="portfolio-image-popupbox" src={taskManager} alt="Desktop"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum necessitatibus ratione praesentium </p>
      <b>Github: </b><a className="hyper-link" onClick= {() => window.open("https://github.com/jaRue1")}>Learn More</a>
      </>
      )
      PopupboxManager.open({content})
      
    }
    const popupboxConfigDesktop = {
        titleBar: {
          enable: true,
          text: "My Applications"
        },
        fadeIn: true,
        fadeInSpeed: 500,
     } 


  return (
   <div className="portfolio-wrapper">
     <div className="container">
       <div className="h1 text-uppercase text-center py-5">portfolio</div>
       <div className="image-box-wrapper">
         
        <div className="portfolio-image-box" onClick={openPopupboxLinkx}>
          <img className="portfolio-images" src={netflix} alt=" majorlinkx web app" />
          <div className="overflow"></div>
          <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
       
       {/*  */}
      
        <div className="portfolio-image-box"onClick={openPopupboxRestaurants}>
         <img className="portfolio-images" src={cityGuide} alt="restaurant web app" />
         <div className="overflow"></div>
         <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
       
       {/*  */}
       
        <div className="portfolio-image-box" onClick={openPopupboxPortfolio} >
         <img className="portfolio-images" src={portfolio} alt="portolio web app" />
         <div className="overflow"></div>
         <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
    
       {/*  */}
      
        <div className="portfolio-image-box" onClick={openPopupboxDesktop}>
         <img className="portfolio-images" src={taskManager} alt="Desktop app" />
         <div className="overflow"></div>
         <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
       </div>
     </div>
     <PopupboxContainer {...popupboxConfigLinkx}/>
     <PopupboxContainer {...popupboxConfigRestaurants}/>
     <PopupboxContainer {...popupboxConfigPortfolio}/>
     <PopupboxContainer {...popupboxConfigDesktop}/>
   </div>
  )
}
export default Portfolio