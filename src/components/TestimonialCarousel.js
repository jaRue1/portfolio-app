import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import avatar1 from "../images/avatars/avatar-1.png"
import avatar2 from "../images/avatars/avatar-2.png"
import avatar3 from "../images/avatars/avatar-3.png"
import avatar4 from "../images/avatars/avatar-4.png"

function TestimonialCarousel() {
  let rec1 = "Nikki Allen"
  let rec2 = "Vitoria Rojas"
  let rec3 = "Jonah Allen"
  let rec4 = "Kevin Choi"
  let rec5 = "Donald "
  let rec6 = "Maria "
  let rec7 = "Aliyah"
  let array = []
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={5000}
    >
      <>
        <img src={avatar1} alt="Nikki" />
        <div className="my-carousel">
          <h3>{rec1}</h3>
          <p>
            Rue is one of the most hardworking professionals I have ever met. He
            is incredibly team oriented, always teaching those around him and
            helping everyone out. Rue would be an amazing asset to any company.
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Vitoria" />
        <div className="my-carousel">
          <h3>{rec2}</h3>
          <p>
            Jarue is one of the most hardworking individuals I know. He pushes
            himself to improve his skills. He is not only a great leader but
            someone you can trust. I believe Jarue would succeed in any company.
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="Jonah" />
        <div className="my-carousel">
          <h3>{rec3}</h3>
          <p>
            Rue has an amazing work ethic. He goes out of his way to help others
            and is one of the most real and down-to-earth people I have ever
            met. I look up to him and I honored to have been able to work along
            side him.
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="Kevin" />
        <div className="my-carousel">
          <h3>{rec4}</h3>
          <p>
            When you’re in the presence of Rue, it’s a blessing. Rue is one of
            the most talented, brilliant and nicest person I have ever met in my
            life! He is a natural leader and also amazing team player!
          </p>
        </div>
      </>
    </Carousel>
  )
}
export default TestimonialCarousel
