
import React,{Component} from 'react';
import Main from './Main';
import Header from './Nav'
import {Route,Link} from 'react-router-dom'
import './App.css';

class App extends Component {
  render(){

    return (
      <div className="App">

        {/* Routes */}
      <Route path="/" component={Header}/>
      <Route path="/main" component={Main}/>
      <Link to="/main">Start</Link>

      
      
      </div>
    );


  }
  
}

export default App;
