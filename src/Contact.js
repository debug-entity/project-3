import React from "react";
import './Contact.css'
const Contact =()=>(
 
      <div className="contact">
        <form className="feedback">
        <h1 className="title"> Contact us </h1>
          <label  >Name </label><br/>
          <input className="form" type="name" placeholder ="Your Name"/>
          <br />
          <label>Email</label>
          <input className="form" type="email" name="emailaddress" placeholder="Email Address" />
          <br />
          <label>Feedback</label>
          <br />
          <textarea className="form" rows="4" cols="50" placeholder="We hope to know your opinion about our App">
          </textarea>
          <br />

          <button className='btnn' type="submit" >Submit</button>
        </form>
  
      </div>


)
export default Contact;