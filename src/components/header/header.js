import { Link } from "gatsby"
import React from "react"
import "./header.scss"

const header = () => (

  <header>
      <div className="inner-header">
        <div className=" logo">
          <Link to="/">DUONG VY</Link>
        </div>
        <div className=" navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Project</Link>
            <Link to="/expierence">Expierence</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </div>
  </header>

)
export default header
