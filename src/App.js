import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import Particles from 'react-particles-js'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Services from "./components/Services"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
// import Contact from "./components/Contact"

function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value : 30, density: {
            enable: true , value_area: 800
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 6, 
            color: "#FF5F1F"
          }
        }
      }
    }}
    />
      <Navbar />
      <Header />
      <AboutMe/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
      {/* <Contact/> */}
    </>
  )
}

export default App
