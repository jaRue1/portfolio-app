import React from 'react'
import netflix from '../images/netflix.png'
import portfolio from '../images/portfolio.png'
import cityGuide from '../images/city-guide-app.png'
import taskManager from '../images/task-manager.png'
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
  return (
   <div className="portfolio-wrapper">
     <div className="container">
       <div className="h1 text-uppercase text-center py-5">portfolio</div>
       <div className="image-box-wrapper row justify-content-center">
         
        <div className="portfolio-image-box">
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
   </div>
  )
}
export default Portfolio