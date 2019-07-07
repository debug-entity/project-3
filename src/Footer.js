import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import About from "./About";
import Contact from './Contact'

class Footer extends Component {
  render() {
    return (
      <div>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <Link to="/about">About | </Link> 
        <Link to="/contact"> Contact</Link> 


      </div>      
    );
  }
}

export default Footer;
