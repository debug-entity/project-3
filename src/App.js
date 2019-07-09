
import React,{Component} from 'react';
import Main from './Main'
import {Route} from 'react-router-dom'
import './App.css';
import Footer from './Footer';

class App extends Component {
  render(){

    return (
      <div className="App">
        <Main />
        <Footer />
      </div>
    );


  }
  
}

export default App;
