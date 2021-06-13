import React from 'react'

 function Contact() {
  return (
    <div className='contact'>
      <div className='text-center'>
      <h2> Let's Connect </h2>
      <p>Please fill out the form below.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className='col-md-6 col-xs-12'>
            {/* Name Input Field */}
            <input
            id="name"
            type='text'
            className='form-control'
            placeholder='enter your name'
            name='name'
            />
            <div className='line'></div>
            {/* Phone Number  */}
            <input
            id="phone"
            type='text'
            className='form-control'
            placeholder='enter your number'
            phone='phone'
            />
            <div className='line'></div>
             {/* Email  */}
             <input
             id="email"
             type='email'
            className='form-control'
            placeholder='enter your email'
            email='email'
            />
            <div className='line'></div>
            {/* Subject  */}
            <input
            id="subject"
            type='text'
            className='form-control'
            placeholder='Subject'
            subject='subject'
            />
            <div className='line'></div>
          </div>
            <div className='col-md-6 col-xs-12'>
              {/* Description  */}
              <textarea 
              id="description"
              type='text'
              className="form-control" 
              placeholder='Tell me about it.'

              id="textarea"
              >
              </textarea>
              <div className='line'></div>
            <button className='btn-main-offer contact-btn' type='submit'>CONTACT ME</button>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Contact