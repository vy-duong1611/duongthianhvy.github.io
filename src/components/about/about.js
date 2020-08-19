import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { UserOutlined, HeartOutlined, WomanOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons'
import "./about.scss"

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
          <div className="icon">
            
            <UserOutlined className="icon-padding" />
            <br />
            <HeartOutlined className="icon-padding" />
            <br />
            <WomanOutlined className="icon-padding" />
            <br />
            <PhoneOutlined className="icon-padding" />
            <br />
            <MailOutlined className="icon-padding" />
            <br />
            <EnvironmentOutlined className="icon-padding" />

          </div>
          <p>  DUONG THI ANH VY<br />
           06/01/1996<br />
           Female<br />
           0963618931<br />
           duong.thianhvy1611@gmail.com<br />
           34/4, 16 Street, Linh Chieu Ward, Thu Duc District, HCM City
          </p>

        </div>

      </div>
    </div>
  )
}



export default About