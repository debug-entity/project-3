import React from 'react';
import './About.css'


const About = () => (
    <div className="about">
        <h1 className="aboutAdd">About ONASA</h1>
            <div className="pragraph">
        <h2 className="qut"> <i> "feelings can't be ignored, no matter how unjust or ungrateful they seem" </i></h2>
        <p> <span className="logo">ONASA</span> is a speical application dedicated to analysing text and displaying how peopel feel.<br/>
        This process is accomplished by simply asking how poeple feel and storing the input.
        <br/>The graph is a reflection of how people who visited the application feel.<br/>
         it demonstrate their mood and emotion in that particular moment. </p>
         <br/>
        <div className="team">
         <h3>Team member:</h3>
         <h4> Omar , Nuwayyir , Asmaa , Saeed , Ahmed </h4>
         
         </div>

        </div>
    </div>
)

export default About;