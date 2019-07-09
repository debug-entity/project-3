import React from 'react';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

function Start(props) {
    const { user, signOut, signInWithGoogle } = props.auth;
    console.log(user);
  
    let parent = props.parent;
    if (user) {
      return <SignedIn user={user} signOut={signOut} parent={parent}/>
    } else {
      return <SignedOut signInWithGoogle={signInWithGoogle} />
    }
  }

export default Start;