import React from 'react'
import majorLinkx from '../images/my-images/majorlinkx.png'
import portfolio from '../images/my-images/portfolio.png'
import affirm from '../images/my-images/affirm.png'
import taskManager from '../images/my-images/productPage.png'
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"



 
function Portfolio() {

// Need to trouble shoot why titles are rendering the same for each popup

  // Project Linkx
const openPopupboxLinkx = () => {
  const content = (
  <>
  <h2>Majorlinkx.io project</h2>
  <img className="portfolio-image-popupbox" src={majorLinkx} alt="linkx"/>
  <p>
    This is a social media application built with React, Express, Node and MongoDB deployed to AWS. 
    <br/>
    For music industry professionals to display all their work and connect.
    <br/>
    The application showcases full C.R.U.D functionality.
  </p>
  <b>Demo: </b><a className="hyper-link" onClick= {() => window.open("http://majorlinkx.io-app.s3-website-us-east-1.amazonaws.com/")}>Try it!</a>
  <br/>
  <b>GitHub: </b><a className="hyper-link" onClick= {() => window.open("https://github.com/jaRue1/majorlinkx.io")}>Take a Look</a>
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
  <h2>Affirmations Web App</h2>
  <img className="portfolio-image-popupbox" src={affirm} alt="Restaurants"/>
  <p>
    Application built with React, Express, Node and Firestore. 
    <br/>
    This App showcases logging in user with google authentication, receiving and displaying users data.
  </p>
  <b>Demo: </b><a className="hyper-link" onClick= {() => window.open("https://affirm-app-jj.web.app/")}>Try it !</a>
  <br/>
  <b>GitHub: </b><a className="hyper-link" onClick= {() => window.open("https://github.com/jaRue1/affirmations-react-app")}>Take a Look</a>
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
   <h2>Portfolio web app</h2>
  <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio"/>
  <p>Portfolio web app built with React , CSS and Bootstrap </p>
  <b>Github: </b><a className="hyper-link" onClick= {() => window.open("https://github.com/jaRue1/portfolio-app")}>Take a Look</a>
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
      <h2>Custom Landing Page</h2>
      <img className="portfolio-image-popupbox" src={taskManager} alt="Desktop"/>
      <p>Static product page built with HTML and CSS </p>
      <b>Github: </b><a className="hyper-link" onClick= {() => window.open("https://github.com/jaRue1/MyPracticeHTML-CSS/tree/main/landingPage")}>Take a Look</a>
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
   <div id='portfolio' className="portfolio-wrapper">
     <div className="container">
       <div className="h1 text-uppercase text-center py-5">portfolio</div>
       <div className="image-box-wrapper">
         
        <div className="portfolio-image-box" onClick={openPopupboxLinkx}>
          <img className="portfolio-images" src={majorLinkx} alt=" majorlinkx web app" />
          <div className="overflow"></div>
          <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
       
       {/*  */}
      
        <div className="portfolio-image-box"onClick={openPopupboxRestaurants}>
         <img className="portfolio-images" src={affirm} alt="restaurant web app" />
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