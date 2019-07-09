
import React,{Component} from 'react';
import Main from './Main'
import Home from './Home'
import {Route} from 'react-router-dom'
import './App.css';
import About from './About'
import Footer from './Footer';



class App extends Component {
  render(){

    return (
      <div className="App">

        {/* Routes */}
      <Route  path="/" component={Main}/>
      <Route path="/home" component={Home}/>
      {/* <Link to="/main">Start</Link><br /> */}
      {/* {<Route path="/about" component={About} />
      <Link to="/about">About</Link> <br />  */}

        <Footer />
      
      
      </div>
    );


  }
  
}

export default App;
