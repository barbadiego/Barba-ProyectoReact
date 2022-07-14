import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAi9JIiNO3N9Sqjue6ZvM3gkx9jc5Xo9E4",
  authDomain: "barba-ecommerceproject.firebaseapp.com",
  projectId: "barba-ecommerceproject",
  storageBucket: "barba-ecommerceproject.appspot.com",
  messagingSenderId: "724130284025",
  appId: "1:724130284025:web:5cc80fdb020836cfecbd28"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
