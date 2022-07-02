import React from 'react'
import majorLinkx from '../images/my-images/majorlinkx.png'
import trelloClone from '../images/my-images/trello-clone.png'
import portfolio from '../images/my-images/portfolio.png'
import affirm from '../images/my-images/affirm.png'
import taskManager from '../images/my-images/productPage.png'
import AmazonClone from '../images/my-images/amz-clone.png'
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"



 
function Portfolio() {

// Need to trouble shoot why titles are rendering the same for each popup
  // still don't know why its happening ?????

  // Project Trello Clone
const openPopupboxTrello = () => {
  const content = (
  <>
  <h2>Trello clone</h2>
  <img className="portfolio-image-popupbox" src={trelloClone} alt="Trello Clone"/>
  <p>
    This application built with Nuxt, Nest, Node and Firebase deployed to Google Cloud. 
    <br/>
    
    <br/>
    The application showcases full C.R.U.D functionality.
  </p>
  <b>Demo: </b><a className="hyper-link" onClick= {() => window.open("https://kanban-clone-jj.web.app/")}>Try it !</a>
  <br/>
  <b>GitHub: </b><a className="hyper-link" onClick= {() => window.open("https://github.com/jaRue1/trello-clone")}>Take a Look</a>
  </>
  )
  PopupboxManager.open({content})
  
}
const popupboxConfigTrello = {
    titleBar: {
      enable: false,
      // text: "My Applications"
    },
    fadeIn: true,
    fadeInSpeed: 500,
} 


   // Affirmations Web App
const openPopupboxAffirm = () => {
  const content = (
  <>
  <h2>Affirmations Web App</h2>
  <img className="portfolio-image-popupbox" src={affirm} alt="Affirmations"/>
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
const popupboxConfigAffirm = {
    titleBar: {
      enable: false,
      // text: "My Test"
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
      // text: "My Applications"
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
      <br/>
      <b>Demo: </b><a className="hyper-link" onClick= {() => window.open("http://phonolandingpage.s3-website-us-east-1.amazonaws.com/")}>Continue</a>
      </>
      )
      PopupboxManager.open({content})
      
}
const popupboxConfigDesktop = {
        titleBar: {
          enable: false,
          // text: "My Applications"
        },
        fadeIn: true,
        fadeInSpeed: 500,
} 

       // Desktop web app
const openPopupboxAmz= () => {
      const content = (
      <>
      <h2>Amazon Clone</h2>
      <img className="portfolio-image-popupbox" src={AmazonClone} alt="Desktop"/>
      <p>Built with React and Firebase. This app allows users to sign in and place orders users can also see a log of the orders they placed.
        <br/> 
        I used stripe for the payment processing , cloud functions for my api and firestore for my database.
      </p>
      <b>Github: </b><a className="hyper-link" onClick= {() => window.open("https://github.com/jaRue1/amazon-clone")}>Take a Look</a>
      <br/>
      <b>Demo: </b><a className="hyper-link" onClick= {() => window.open("https://clone-jj.web.app/")}>Continue</a>
      </>
      )
      PopupboxManager.open({content})
      
}
const popupboxConfigAmz = {
        titleBar: {
          enable: false,
          // text: "My Applications"
        },
        fadeIn: true,
        fadeInSpeed: 500,
} 


  return (
   <div id='portfolio' className="portfolio-wrapper">
     <div className="container">
       <div className="h1 text-uppercase text-center py-5">portfolio</div>
       <div className="image-box-wrapper">
         
        <div className="portfolio-image-box" onClick={openPopupboxTrello}>
          <img className="portfolio-images" src={trelloClone} alt="trello clone web app" />
          <div className="overflow"></div>
          <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
      
        <div className="portfolio-image-box"onClick={openPopupboxAffirm}>
         <img className="portfolio-images" src={affirm} alt="affirmations web app" />
         <div className="overflow"></div>
         <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
       
        <div className="portfolio-image-box" onClick={openPopupboxPortfolio} >
         <img className="portfolio-images" src={portfolio} alt="portolio web app" />
         <div className="overflow"></div>
         <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
      
        <div className="portfolio-image-box" onClick={openPopupboxDesktop}>
         <img className="portfolio-images" src={taskManager} alt="Desktop app" />
         <div className="overflow"></div>
         <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>

        <div className="portfolio-image-box" onClick={openPopupboxAmz}>
         <img className="portfolio-images" src={AmazonClone} alt="Amazon Clone" />
         <div className="overflow"></div>
         <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
        </div>
       </div>
     </div>
  
     <PopupboxContainer {...popupboxConfigTrello}/>
     <PopupboxContainer {...popupboxConfigAffirm}/>
     <PopupboxContainer {...popupboxConfigPortfolio}/>
     <PopupboxContainer {...popupboxConfigDesktop}/>
     <PopupboxContainer {...popupboxConfigAmz}/>

   </div>
  )
}
export default Portfolio