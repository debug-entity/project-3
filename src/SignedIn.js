import React from 'react';
import Chart from "react-apexcharts";
import Header from './Header';
import {Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import './SignedIn.css'

const SignedIn = (props) => (
        <div>
          <Header />
          <Link onClick={props.signOut} className="signout" to="/">Sign out</Link>
          {/* <button onClick={props.signOut}>Sign out</button> */}
          <hr/>
          <Route exact path='/' render={()=>{ 
            return (
              <React.Fragment>
                <h1 className="yourd">Your Dairy </h1>
                <p>Hello, {props.user.displayName}</p>
                <br />
                <form   onSubmit={props.parent.submitMyForm}>
                  <label className="diry">How do you feel today? </label><br/>
                  <input  className="feeling" onChange={props.parent.handleChange} name='text' />
        
                  <br />
                  <button className="save" type="submit">Save</button>
                </form>
                 <h5>Your Feeling</h5>
                {props.parent.state.score_tag ?<h3 className="card">{props.parent.state.score_tag}</h3> :""}
                <br />
                {/* Today's Date :{Date()} */}
                <div className="app">
                  <div className="row">
                    <div className="mixed-chart">
                      <Chart
                        key={'chart-' + props.parent.state.series[0].data.length}
                        options={props.parent.state.options}
                        series={props.parent.state.series}
                        type="line"
                        width="700"
                        align="center"
                      />
        
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )
          }}
          />
        </div>
)

export default SignedIn;