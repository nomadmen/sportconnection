import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAtaVasslAZ9S-G05fgZU0RXs_Ae2yVwU0",
  authDomain: "sportconnect-cb02f.firebaseapp.com",
  projectId: "sportconnect-cb02f",
  storageBucket: "sportconnect-cb02f.appspot.com",
  messagingSenderId: "762166401247",
  appId: "1:762166401247:web:9fe04389a618f82302316a",
  measurementId: "G-X94KK2V2V5"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('app'));
