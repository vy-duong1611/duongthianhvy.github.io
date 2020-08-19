import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "./education.scss"

const Education = () => {

  return (
    <div className="education">
      <div className="container">
        <div className="title">
          <h1>Education</h1>
          <div className="purple-box"></div>
        </div>
        <br/>
        <div className="content">
          <h6>September 2019 - July 2020</h6>
          <h5>University of Social Sciences and Humanities – Viet Nam National University Ho Chi Minh City</h5>
          <p> Chuyên ngành: Quản trị thông tin<br/>
              Bằng cấp: Cử nhân thông tin học<br/>
              Loại tốt nghiệp: Khá</p>
        </div>

      </div>
    </div>
  )
}



export default Education