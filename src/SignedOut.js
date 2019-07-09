import React from 'react';
import Header from './Header';
import {Route} from 'react-router-dom';

const SignedOut= (props) => (
    <div>
      <Header />
     <p> Please Sign-in to use our site <button class="sign-in-with-google" onClick={props.signInWithGoogle}>Sign in with Google</button></p>
     <hr/>
     <Route exact path='/' render={()=>{ 
            return (
                <div>
                      <h2>“You only live once, but if you do it right,<br/> once is enough.”</h2><br/>
                      <h3> ― Mae West</h3>
                </div>
            )
     }}
     />
    </div>
  );

  export default SignedOut;