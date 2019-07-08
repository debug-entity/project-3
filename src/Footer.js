import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import About from "./About";
import Contact from './Contact'
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <hr/>
        <Link className="footerBtn" to="/about">About | </Link> 
        <Link className="footerBtn" to="/contact"> Contact</Link> 
         <p>&copy;2019 Onasa </p>

      </div>      
    );
  }
}

export default Footer;
