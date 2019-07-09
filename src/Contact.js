import React from "react";

const Contact =()=>(
 
      <div className="contact">
        <form className="feedback">
        <h1 className="title"> Contact us </h1>
          <label  >Name </label><br/>
          <input className="form" type="name" placeholder ="Your Name"/>
          <br />
          <label>Email</label>
          <input type="email" name="emailaddress" />
          <br />
          <label>Feedback</label>
          <br />
          <textarea rows="4" cols="50">
            We hope to know your opinion about our App
          </textarea>
          <br />

          <input type="submit" />
        </form>
  
      </div>


)
export default Contact;