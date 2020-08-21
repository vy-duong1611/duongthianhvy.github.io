import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {InstagramOutlined,GoogleOutlined, YoutubeOutlined,FacebookOutlined} from '@ant-design/icons'
import "./banner.scss"


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
    }
  `)
    return (
        <section className="banner">
            {/* <div className="container"> */}
                <div className="row">
                  <div className="row1">
                  <div className="purple-box"></div>
                  <div className="main-text">I'm Anh Vy</div>

                  <p>Fresher Dev Front-end </p>
                  
                    <button className="contact-me">Contact me</button>

                    <div className="icon">
                    <FacebookOutlined className="icon-padding"  />
                    <InstagramOutlined  className="icon-padding"/>
                    <GoogleOutlined  className="icon-padding"/>
                    <YoutubeOutlined  className="icon-padding"/>
                    </div>
                    </div>
                    
                    <div className="main-image">
                        <Img fluid={data.duongVy.childImageSharp.fluid} />
                    </div>
                    </div>
                {/* </div> */}
           
            {/* <div className="fixed-misc">Visual Artist and Photographer</div> */}
        </section>
    )
}

export default Banner