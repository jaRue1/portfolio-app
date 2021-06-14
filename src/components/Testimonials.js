import React from 'react'
import TestimonialCarousel from './TestimonialCarousel'
 function Testimonials() {
  return (
  <div id='testimonials' className="testimonials">
    <h2>My Recommendations</h2>
    <div className="container">
      <div className="testimonials-content">
        <TestimonialCarousel/>
      </div>
    </div>
  </div>
  
  )
}
export default Testimonials