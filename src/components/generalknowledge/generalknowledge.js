import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { LaptopOutlined, ReadOutlined } from '@ant-design/icons'
import "./generalknowledge.scss"

const Generalknowledge = () => {

  return (
    <div className="general">
      <div className="container">
        <div className="title">
          <h1>General Knowledge</h1>
          <div className="purple-box"></div>
        </div>
        <br />
        <div className="content">
          <div className="box-left">
            <div className="title-left">
              <LaptopOutlined className="icon" />
              <h2>Office Information</h2>
            </div>
            <p>Word: Khá<br />
            Excel: Khá<br />
            Powerpoint: Khá<br />
            Phần mềm khác: PTS, AI,...</p>
          </div>
          <div className="box-right">
            <div className="title-right">
              <ReadOutlined className="icon" />
              <h2>English</h2>
            </div>
            <p>Nghe: Khá<br />
            Nói: Khá<br />
            Đọc: Khá<br />
            Viết: Khá</p>
          </div>
        </div>

      </div>
    </div>
  )
}



export default Generalknowledge