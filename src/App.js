
import React,{Component} from 'react';
import Main from './Main'
import {Route} from 'react-router-dom'
import './App.css';
import Footer from './Footer';

class App extends Component {
  
  render(){

    return (
      <div className="App">
        <iframe width="0" height="0" src="https://www.youtube.com/embed/3NycM9lYdRI?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <Main />
        <Footer />
      </div>
    );


  }
  
}

export default App;
