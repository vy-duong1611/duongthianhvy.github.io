import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "./expierence.scss"

const Expierence = () => {

  return (
    <div className="expierence">
      <div className="container">
        <div className="title">
          <h1>Expierence</h1>
          <div className="purple-box"></div>
        </div>
        <br />
        <div className="content">
          <h6>October 2018 - March 2020</h6>
          <h5>TRUNG TÂM TIN HỌC - TRƯỜNG ĐH KHOA HỌC TỰ NHIÊN TPHCM</h5>
          <p> Tham gia khóa học 6 tháng Kỹ thuật viên Thiết kế Website:<br/>
          - Layout Web UI/UX<br/>
          - HTML5 + CSS3 + Jquery + JavaScript<br/>
          - Animation<br/>
          - Responsive Web với Boostrap<br/>

          Chứng chỉ loại: Giỏi</p>
        </div>
        <button className="more-info">More Info</button>
      </div>
    </div>
  )
}



export default Expierence