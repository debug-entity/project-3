import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Home.css';
class Home extends Component{
    render(){
        return(
            <div className="home-comp">
            <h2 className="qute">“You only live once, but if you do it right,<br/> once is enough.”</h2><br/>
            <h3 className="qute2"> ― Mae West</h3>
         
          <div className="btn">
          <Link className="startBtn" to="/main">Start</Link>
          </div>

            </div>
        )
    }
}

export default Home