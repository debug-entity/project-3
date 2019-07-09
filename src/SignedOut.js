import React from 'react';
import Header from './Header';
import {Route} from 'react-router-dom';
import Home from './Home';
const SignedOut= (props) => (
    <div>
      <Header />
     <p> Please Sign-in to use our site <button class="sign-in-with-google" onClick={props.signInWithGoogle}>Sign in with Google</button></p>
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