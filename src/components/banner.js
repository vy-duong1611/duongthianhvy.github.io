import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      duongVy: file(relativePath: { eq: "duong-vy.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vyDuong: file(relativePath: { eq: "vy-duong.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coGai: file(relativePath: { eq: "co-gai.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                  <div className="purple-box"></div>
                  <div className="main-text">I'm Anh Vy</div>

                  <p>Fresher Dev Front-end </p>
                  
                    <button className="contact-me">Contact me</button>

                    <div className="icon">
                  
                    </div>
                  
                    <div className="main-image">
                        <Img fluid={data.duongVy.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
            <div className="fixed-misc">Visual Artist and Photographer</div>
        </div>
    )
}



export default Banner