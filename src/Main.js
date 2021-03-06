import React, {Component} from 'react';
import { textanalysis } from "./api";
import './Main.css';
import TestFirebase from './TestFirebase';
import withFirebaseAuth, {providers, firebaseAppAuth, db} from './TestFirebase';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

class Main extends Component {
    state = {
        text: "",
        score_tag: "",
        submit: false,
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
            text: "",
            align: "center",
            style:{
              color: "#f3f3f3",
              fontSize: '20px',
              fontFamily: undefined,
            }
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "#f3f3f3"], // takes an array which will be repeated on columns
              opacity: 0.5
            }
          },
          xaxis: {
            categories: []
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
          let scoreNum = 0;
          switch (letterScore) {
            case "P+":
    
              copyOfResults[0].data.push(98)
              scoreNum = 98;
              break;
    
            case "P":
              copyOfResults[0].data.push(80);
              scoreNum = 80
              break;
            case "N":
    
              copyOfResults[0].data.push(50)
              scoreNum = 50;
              break;
            case "N+":
    
              copyOfResults[0].data.push(20)
              scoreNum = 20;
              break;
            case "NONE":
    
              copyOfResults[0].data.push(0)
              scoreNum = 0;
              break;
            default:
    
          }
          // console.log(this.state.series)
          // console.log(copyOfResults)
          db.collection('modes').add({
            user: this.props.user.email,
            text: this.state.text,
            score_tag: letterScore,
            score_num: scoreNum,
            date: new Date(),
    
          });
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
        const { user, signOut, signInWithGoogle } = this.props;
        let authView
        if (user) {
          authView = <SignedIn user={user} signOut={signOut} parent={this}/>
        } else {
          authView = <SignedOut signInWithGoogle={signInWithGoogle} />
        }
        return(
            <header>  
                <TestFirebase />
                 {authView}
            </header>
        )
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Main);