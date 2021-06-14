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
            Greetings,
           My name is Jarue "Rue" Johnson, I am a florida native and I have been in the Tech industry since I was 16 years old. 
           My passion for helping people started when I was young and I always had technology around me due to my father. He was an brilliant engineer that 
           ran a business of his own. This is where I got my start in tech and thanks to him and several others I have been able to learn and grow , not only as 
           a engineer but also as a person. I love merging my skills of coding with my passions such as sports and music. The fun thing about coding is that there are no 
           limits on what you can do with it. The only real boundaries are the ones that you set yourself ! 
          </p>
          <h2 className= 'about-heading'>My Passions</h2>
          <p>
            For me I have always looked for ways to help people, make a change, have an impact. However, the road to finding out how I could do such a thing has been rocky
            and riddle with failures. Until now, some of my passion such as music, sports and education can all be tied into coding and displayed to the world. Making an impact
            and using code as a medium to do so is the most rewarding thing of all.
          </p>
        </div>
        
        
      </div>
    </div>
  )
}
export default AboutMe
 