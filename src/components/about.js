import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const About = () => {

  return (
    <div className="about">
      <div className="container">
        <div className="title">
          <h1>Personal Information</h1>
          <div className="purple-box"></div>
        </div>
        <br />
        <div className="content">
          <p>Full Name:  DUONG THI ANH VY<br/>
          Birthday: 06/01/1996<br/>
          Gender: Female<br/>
          Phone number: 0963618931<br/>
          Email: duong.thianhvy1611@gmail.com<br/>
          Address: 34/4, 16 Street, Linh Chieu Ward, Thu Duc District, HCM City
          </p>
        </div>

      </div>
    </div>
  )
}



export default About