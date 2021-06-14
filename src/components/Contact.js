import React from "react"
import emailjs from "emailjs-com"
import {useForm} from 'react-hook-form'
import { useState } from 'react'

function Contact() {

const [successMessage, setSuccessMessage] = useState("");

const {register, handleSubmit, errors} = useForm();


  const serviceID = "service_i2gljqg"
  const templateID = "template_cv6bp1o"
  const userID = "user_sJ10LfYEBbUOOhmMjbNYF"

  const onSubmit = (data, r) =>{
    sendEmail(serviceID, templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
      )
      r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
    .then(() => {
        setSuccessMessage("Your message was sent successfully! Expect a response within 24 to 48 hours. ")
      }).catch(err => console.error(`Something went wrong${err}`))
  }
console.log(errors)
console.log(register)
  return (
    <div className="contact">
      <div className="text-center">
        <h2> Let's Connect </h2>
        <p>Please fill out the form below.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12 form-class">
              {/* Name Input Field */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your name"
                  name="name"
                  {...register( 'name' , {
                      required: "Please Enter Your Name",
                      maxLength: {
                        value: 20,
                          message: 'Please enter a with fewer than 20 characters'
                      }
                    })
                 }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors && errors.name && errors.name.message}
              </span>
              {/* Phone Number  */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your number"
                  name="phone"
                  {...register( 'test' , {
                    required: "Please Enter Your Phone Number",
                  })
               }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors && errors.phone && errors.phone.message}
              </span>
              {/* Email  */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="enter your email"
                  name="email"
                  {...register( 'test' , {
                    required: "Please Enter Your Email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid Email"
                    }
                  })
               }
                />
                <div className="line"></div>
              </div>
               <span className="error-message">
                {errors && errors.email && errors.email.message}
              </span>
              {/* Subject  */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register( 'test' , {
                    required: "You need to add a subject",
                  })
               }
                />
                <div className="line"></div>
              </div>
            </div>
            <span className="error-message">
                {errors && errors.subject && errors.subject.message}
              </span>
            <div className="col-md-6 col-xs-12 form-class">
              {/* Description  */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Tell me about it."
                  name="description"
                  {...register( 'test' , {
                    required: "You need to add a description",
                  })
               }
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors && errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                CONTACT ME
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Contact
