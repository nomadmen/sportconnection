import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export function Auth() {
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <button onClick={signIn}>Se connecter avec Google</button>
  );
}