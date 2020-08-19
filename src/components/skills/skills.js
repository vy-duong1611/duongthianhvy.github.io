import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./skills.scss"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      phuyen: file(relativePath: { eq: "phu-yen.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bienpy: file(relativePath: { eq: "bien-py.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="skills">
      <div className="container">
        <div className="title">
          <h1>Skills</h1>
          <div className="purple-box"></div>
        </div>
        <br />
        <div className="images-left">
          <Img fluid={data.phuyen.childImageSharp.fluid} />
          <div className="box-right">
            <h5>01.Kỹ năng chính</h5><br />
            <p>- Có kinh nghiệm trong quản trị Website bằng Wordpress<br />
            - Có kinh nghiệm thiết kế giao diện Website<br />
            - Có kinh nghiệm và xử lý tốt công cụ thiết kế: Adobe
            photoshop, Illustrator, Dreamweaver...<br />
            - Kỹ năng làm việc độc lập và làm việc nhóm</p>
          </div>
        </div>
        <div className="images-right">
          <Img fluid={data.bienpy.childImageSharp.fluid} />
          <div className="box-left">
            <h5>02.Kỹ năng khác</h5><br />
            <p>- Kỹ năng lắng nghe<br/>
            - Học và tự học<br/>
            - Giải quyết vấn đề<br/>
            - Tổ chức, sắp xếp công việc<br/>
            - Cẩn thận, tỉ mỉ, có trách nhiệm trong công việc</p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Skills