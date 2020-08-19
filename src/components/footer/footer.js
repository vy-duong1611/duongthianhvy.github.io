import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import {InstagramOutlined,GoogleOutlined, YoutubeOutlined,FacebookOutlined} from '@ant-design/icons'
import "./footer.scss"

const Footer = () => {

  return (
    <div className="footer">
      <div className="container">
        <div className="icon">
          <FacebookOutlined className="icon-padding"  />
          <InstagramOutlined className="icon-padding" />
          <GoogleOutlined  className="icon-padding"/>
          <YoutubeOutlined className="icon-padding" />
        </div>
        <p>Copyright @2020 by DTAV</p>
      </div>
    </div>
  )
}



export default Footer