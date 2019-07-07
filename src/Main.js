import React, { Component } from "react";
import { textanalysis } from "./api";
import About from './About'
import Chart from "react-apexcharts";

class Main extends Component {
 
  state = {
    text: "",
    score_tag: "",
    submit:false,
    options: {
      chart: {
        zoom: {
          enabled: true
        }
      },
       dataLabels: {
        enabled: true
       },
       stroke: {
         curve: "straight"
       },
      title: {
        text: "Feelings Of people In month",
        align: "center"
      },
       grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
         opacity: 0.5
        }
      },
      xaxis: {
        categories: ["P+", "P", "N", "N", "N+", "non", "N+", "P+", "P+", "N"]
      }
    },
    series: [
      {
        name: "Desktops",
        data: []
      }
    ]
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
      
      const letterScore = d.data.score_tag;
      const copyOfResults = this.state.series.slice()
     
      switch(letterScore){
         case "P+":
          
          copyOfResults[0].data.push(98)
         
          break;

         case "P":
          copyOfResults[0].data.push(80)
          break;
          case "N":
         
          copyOfResults[0].data.push(50)
         
          break;
          case "N+":
         
          copyOfResults[0].data.push(20)
         
          break;
          case "NONE":
        
          copyOfResults[0].data.push(0)
          
          break;
          default:
         
      }
      // console.log(this.state.series)
      // console.log(copyOfResults)
      this.setState({
        score_tag: d.data.score_tag,
        series: copyOfResults
      });
      })
  };
  handleChange = event => {
    // this.state.submit = false;


    const userInput = event.target.value;
    // const inputName = event.target.name;

    this.setState({
      text: userInput
    });
  };
  render() {
    console.log(this.state.series)
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
        <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart 
              key={'chart-'+this.state.series[0].data.length}
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="700"
              align="center"
              />
            
          </div>
        </div>
      </div>       
      </div>
    );
  }
}
export default Main