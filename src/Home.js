import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import quotesApi from "./quotesApi";

import './Home.css';
// import TestFirebase from './TestFirebase';

class Home extends Component{
    state = {
        quoteText: ''
    }
    componentDidMount() {
        quotesApi()
          .then(res => {
            // console.log(res.data.quoteText);
            this.setState({
                quoteText: res.data.quoteText
            })
          })
          .catch(() => {
            console.log("err");
          });
      }
    render(){
        return(
            <div className="home-comp">
            <h3>{this.state.quoteText}</h3><br/>
            <h3> ― Mae West</h3>
           
            </div>
        )
    }
}

export default Home