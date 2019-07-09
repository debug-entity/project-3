import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";
const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const db = firebaseApp.firestore();
/*db.collection('users').add({name: 'Nona'});*/
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

/*
class TestFirebase extends Component{
    render(){
        const {
            user,
            signOut,
            signInWithGoogle,
          } = this.props;
        return(
            <div>
            <header>
              {
                user 
                  ? <p>Hello, {user.displayName}</p>
                  : <p>Please sign in.</p>
              }
              {
                user
                  ? <button onClick={signOut}>Sign out</button>
                  : <button onClick={signInWithGoogle}>Sign in with Google</button>
              }
            </header>
          </div>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(TestFirebase)
  ;*/
export default withFirebaseAuth;
export {firebaseAppAuth, providers, db};