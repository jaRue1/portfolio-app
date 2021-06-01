import React from 'react'
import Typed from "react-typed"
function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
      <h1> Software Engineer </h1>
      <Typed
        className="typed-text"
        strings={["Web Design","Web Development", "Mobile Applications"]}
        typeSpeed={40}
        backSpeed={40}
        loop
      />
        <a href="#" className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  )
}

export default Header
