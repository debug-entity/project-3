
import React,{Component} from 'react';
import Main from './Main';
import Header from './Nav'
import Home from './Home'
import {Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render(){

    return (
      <div className="App">

        {/* Routes */}
      <Route path="/" component={Header}/>
      <Route  path="/main" component={Main}/>
      <Route exact path="/home" component={Home}/>
      
       
      
      
      </div>
    );


  }
  
}

export default App;
