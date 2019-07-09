import React from 'react';
import Header from './Header';
import {Route} from 'react-router-dom';
import Home from './Home';
import {Link} from "react-router-dom";
const SignedOut= (props) => (
    <div>
      <Header />
     {/* <p> <button class="sign-in-with-google" onClick={props.signInWithGoogle}>Sign in with Google</button></p> */}
     <Link onClick={props.signInWithGoogle} className="sign-in-with-google" to="/">Sign in</Link>
     <hr/>
     <Route exact path='/' render={()=>{ 
            return (
                <div>
                      <Home />
                </div>
            )
     }}
     />
    </div>
  );

  export default SignedOut;