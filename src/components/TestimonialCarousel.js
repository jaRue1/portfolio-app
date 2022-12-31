import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import nikkiImg from "../images/avatars/nikki-allen.jpeg"
import vitoriaImg from "../images/avatars/vitoria-roas.jpeg"
import jonahImg from "../images/avatars/jonah-allen.jpeg"
import kevinImg from "../images/avatars/kevin-choi.jpeg"
import jonImg from "../images/avatars/jon.jpeg"
import toddImg from "../images/avatars/todd.jpeg"

function TestimonialCarousel() {
  // Todd Albert 1
  // Jonathan Sanchez 2
  // Vitoria Roas 3
  // Kevin Choi 4
  // Nikki Allen 5
  // Jonah Allen 6

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
    >
      {/* 1 */}
      <>
        <img src={toddImg} alt="Todd" />
        <div className="my-carousel">
          <a href="https://www.linkedin.com/in/toddalbert/" target="_blank">
            <h3>Todd Albert</h3>
          </a>
          <p>
            I've never seen someone work as hard as Jarue. As a student in our
            Software Engineering Career Course, Jarue put in more time outside
            of class than any other student. He lead study sessions for other
            students on weekends and was a role model to others in the course.
          </p>
        </div>
      </>

      {/* 2 */}
      <>
        <img src={jonImg} alt="Jonathan" />
        <div className="my-carousel">
          <a
            href="https://www.linkedin.com/in/jonathansanchez199/"
            target="_blank"
          >
            <h3>Jonathan Sanchez</h3>
          </a>
          <p>
            Jarue is not only an extraordinary developer and IT professional but
            an amazing young man, with very solid foundations. While working
            with Jarue I was particularly overwhelmed by his commitment,
            willingness to help others, and to always pushing the boundaries to
            be the best.
          </p>
        </div>
      </>

      {/* 3 */}
      <>
        <img src={vitoriaImg} alt="Vitoria" />
        <div className="my-carousel">
          <a
            href="https://www.linkedin.com/in/vitoria-roas-9b542618a/"
            target="_blank"
          >
            <h3>Vitoria Roas</h3>
          </a>
          <p>
            Jarue is one of the most hardworking individuals I know. He pushes
            himself to improve his skills. He is not only a great leader but
            someone you can trust. I believe Jarue would succeed in any company.
          </p>
        </div>
      </>

      {/* 4 */}
      <>
        <img src={kevinImg} alt="Kevin" />
        <div className="my-carousel">
          <a href="https://www.linkedin.com/in/kevinyc/" target="_blank">
            <h3>Kevin Choi</h3>
          </a>
          <p>
            When you’re in the presence of Rue, it’s a blessing. Rue is one of
            the most talented, brilliant and nicest person I have ever met in my
            life! He is a natural leader and also amazing team player!
          </p>
        </div>
      </>

      {/* 5 */}
      <>
        <img src={nikkiImg} alt="Nikki" />
        <div className="my-carousel">
          <a
            href="https://www.linkedin.com/in/nicole-allen-37736b20b/"
            target="_blank"
          >
            <h3>Nikki Allen</h3>
          </a>
          <p>
            Rue is one of the most hardworking professionals I have ever met. He
            is incredibly team oriented, always teaching those around him and
            helping everyone out. Rue would be an amazing asset to any company.
          </p>
        </div>
      </>

      {/* 6 */}
      <>
        <img src={jonahImg} alt="Jonah" />
        <div className="my-carousel">
          <a href="https://www.linkedin.com/in/jonahsallen/" target="_blank">
            <h3>Jonah Allen</h3>
          </a>

          <p>
            Rue has an amazing work ethic. He goes out of his way to help others
            and is one of the most real and down-to-earth people I have ever
            met. I look up to him and I honored to have been able to work along
            side him.
          </p>
        </div>
      </>
    </Carousel>
  )
}
export default TestimonialCarousel
