import React, { Component } from "react";
import { textanalysis } from "./api";
import axios from "axios";

class App extends Component {
 
  state = {
    text: "",
    score_tag: "",
    
    // testMode: {
    //   text: '',
    //   // score: 'P+ -> 2, P -> 1, N -> -1, NONE -> 0',
    //   date: new Date().getFullYear
    // }
  };

  submitMyForm = event => {
    event.preventDefault();
    console.log(new Date());
    textanalysis(this.state.text).then(d => {
      console.log(d.data);
      this.setState({
        score_tag: d.data.score_tag
      });
      })
  };
  handleChange = event => {
    const userInput = event.target.value;
    const inputName = event.target.name;

    this.setState({
      text: userInput
    });
  };
  render() {
    return (
      <div>
        <h1>Your Dairy </h1>
        <form onSubmit={this.submitMyForm}>
          <label>How do you feel today? </label>
          <input onChange={this.handleChange} name='text' />

          <br />
            <button type="submit">save</button>
        </form>

        your feeling :{this.state.score_tag}
        <br />
        Today's Date :{Date()}
         
      </div>
    );
  }
}

export default App;
