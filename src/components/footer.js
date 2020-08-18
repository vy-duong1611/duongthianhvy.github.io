import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import {InstagramOutlined,GoogleOutlined, YoutubeOutlined,FacebookOutlined} from '@ant-design/icons'


const Footer = () => {

  return (
    <div className="footer">
      <div className="container">
        <div className="icon">
          <FacebookOutlined style={{ padding: '0 5px' }} />
          <InstagramOutlined style={{ padding: '0 5px' }} />
          <GoogleOutlined style={{ padding: '0 5px' }} />
          <YoutubeOutlined style={{ padding: '0 5px' }} />
        </div>
        <p>Copyright @2020 by DTAV</p>
      </div>
    </div>
  )
}



export default Footer