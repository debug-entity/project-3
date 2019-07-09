import React from 'react';
import Header from './Header';

const SignedOut= (props) => (
    <div>
      <Header />
      Please Sign-in to use our site <button class="sign-in-with-google" onClick={props.signInWithGoogle}>Sign in with Google</button>
    </div>
  );

  export default SignedOut;