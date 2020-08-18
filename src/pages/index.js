import React from "react";
import "../styles/styles.scss"
import Header from "../components/header";
import Banner from "../components/banner";
import AboutBlurb from "../components/skills";
import Education from "../components/education";
import Expierence from "../components/expierence";
import Skills from "../components/skills";
import Footer from "../components/footer";

const IndexPage = () => (

  <div>
    <Header />
    <Banner />
    <Education />
    <Expierence />
    <Skills />
    <Footer/>
  </div>


)

export default IndexPage
