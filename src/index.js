import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Store from './store/provider';

const config = {
  apiKey: "AIzaSyDtnGhI0DQiD72NIS9GVs4XR1mSouHNeP0",
  authDomain: "agrodados-b96cd.firebaseapp.com",
  databaseURL: "https://agrodados-b96cd-default-rtdb.firebaseio.com",
  projectId: "agrodados-b96cd",
  storageBucket: "agrodados-b96cd.appspot.com",
  messagingSenderId: "309520588596",
  appId: "1:309520588596:web:19a5abb4c8b6adde474f61"
}

//authConfig();
firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
