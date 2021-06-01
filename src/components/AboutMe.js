import React from "react"
import author from "../me.jpg"
const AboutMe = () => {
  return (
    <div className="container py-5 about">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
        <div className="photo-wrap">
          <img className='profile' src={author} alt="" style={{ alignItems: "center" }} />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2 className= 'about-heading'>About Me</h2>
          <p>
            hello I am Rue, Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Explicabo error laborum fuga corrupti labore rem voluptatum
            reiciendis dolores magnam, vitae placeat cumque ratione ducimus
            quidem, perferendis libero voluptas reprehenderit expedita. At
            suscipit voluptatem distinctio maxime architecto error. Ullam
            blanditiis voluptas esse est sunt numquam, sapiente sequi omnis?
            Inventore, rerum mollitia, minus beatae, eum quam quisquam corrupti
            sapiente iste nam nihil! Earum vero pariatur similique nostrum
            aliquam eum repellat aperiam sit ipsa voluptates. Quae amet aliquam
            numquam cumque deleniti nesciunt, saepe ut quasi minima veniam
            dolorum beatae suscipit exercitationem ea sed! Molestiae nobis ipsum
            ducimus asperiores, veniam quis omnis officiis quaerat voluptatum
            dolorum nostrum doloribus modi doloremque excepturi soluta earum
            accusantium, possimus nemo quos est error quidem fugit. Unde, et?
            Sed. Ut voluptate nesciunt incidunt atque. Iste vitae expedita,
            quasi ipsam nam, magnam nemo minima deserunt quo ex autem eos quam
            assumenda distinctio culpa voluptatibus, saepe perspiciatis ipsum
            est mollitia ad!
          </p>
        </div>
      </div>
    </div>
  )
}
export default AboutMe
 