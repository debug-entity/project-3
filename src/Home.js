import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Home.css';
// import TestFirebase from './TestFirebase';

class Home extends Component{
    render(){
        return(
            <div className="home-comp">
            <h2>“You only live once, but if you do it right,<br/> once is enough.”</h2><br/>
            <h3> ― Mae West</h3>
          <div className="btn">
          <Link className="startBtn" to="/main">Start</Link>
         

          </div>

            </div>
        )
    }
}

export default Home