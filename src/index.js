import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// FIREBASE

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDmlAyTsMEXzPN4rUc39Km90GJ66N-sxfM",
  authDomain: "coderhouse-jpentrenador.firebaseapp.com",
  projectId: "coderhouse-jpentrenador",
  storageBucket: "coderhouse-jpentrenador.appspot.com",
  messagingSenderId: "363239746638",
  appId: "1:363239746638:web:783a741763eb806586671f"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
