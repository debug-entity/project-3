import React from 'react';
import Chart from "react-apexcharts";
import Header from './Header';

const SignedIn = (props) => (
        <div>
          <Header />
          <button onClick={props.signOut}>Sign out</button>
          <h1>Your Dairy </h1>
          <p>Hello, {props.user.displayName}</p>
          <br />
          <form onSubmit={props.parent.submitMyForm}>
            <label>How do you feel today? </label>
            <input onChange={props.parent.handleChange} name='text' />
  
            <br />
            <button type="submit">save</button>
          </form>
  
          your feeling :{props.parent.state.score_tag}
          <br />
          Today's Date :{Date()}
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
        </div>
)

export default SignedIn;