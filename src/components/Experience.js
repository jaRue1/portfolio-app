import React from "react"

function Experience() {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h2>Experience</h2>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016-2019</h3>
            <p>
              <b>Graduated</b> form Florida Atlantic University with honors and
              received a Bachelors in Management Information Systems with a
              focus of Cyber Security. Completed Senior project called Nexus
              which was a Java Application that allowed users to reserve
              classrooms to study in. Technology used: Java, JSP pages, HTML,CSS
              and JavaScript.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019</h3>
            <p>
              <b>Junior Developer Incapital:</b> Troubleshoot various errors on Website
              platform (incapnet). Used C# object-oriented design to correct
              errors as well as generate new logic to prevent similar errors
              from ever occurring within MVC applications
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>
              <b>Junior System Admin:</b> Troubleshoot various issues with
              laptops and desktop both hardware and software using RMM (Remote
              Monitor Management). Handle networking equipment such as switches,
              routers and firewalls. Also, scan networks and work with the
              Network Admin to troubleshoot issues. Managing users and resources
              in Azure Cloud Environment.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021</h3>
            <p>
              <b>Engineer the Change Scholarship Recipient,</b> Completed Course
              at Boca Code. Final Project (Majorlinkx.io) A social media
              platform that consolidates all of the different social media
              profiles for musicians / artists. Technology used: JWT, Bcryptjs,
              React, Express, Node and MongoDB deployed to AWS.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021 - 2022 </h3>
            <p>
              <b>Platform Engineer Watsco Ventures:</b> Using Tools and
              Languages such as Terraform, Docker, Kubernetes, JavaScript, Node,
              Bash, Java , Kafka, K8s ,Python and the AWS cloud to create,
              deploy infrastructure and automate development processes.
              Architected custom CICD pipeline using terraform. Used CICD best
              practices and educated colleagues on the new development operation
              processes..
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2022 - Present</h3>
            <p>
              <b>Software Engineer Torticity </b> Implementing end to end
              features on internal application. Using tools/ technologies and
              languages such as Node, Nuxt js , Nest js , Terraform ,Terragrunt
              Typescript, Bash, Docker, and AWS Cloud. Also Implemented end to
              end tests using cypress and jest.
            </p>
          </div>
        </div>
      </div>
      {/* End of Container */}
    </div>
  )
}

export default Experience
