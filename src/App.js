import './App.css';
import React from 'react';
// import MockTest from './page/Vstep'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Vstep from './page/Vstep';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU8qfeM4ksrpVRVyNNitqmkg2cp5kPtLo",
  authDomain: "mocktest2-ce0ab.firebaseapp.com",
  projectId: "mocktest2-ce0ab",
  storageBucket: "mocktest2-ce0ab.appspot.com",
  messagingSenderId: "411850484274",
  appId: "1:411850484274:web:902cd75388d849d514ea2b",
  measurementId: "G-2FLZYX53S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div className='bg-[#fafafa]'>
      {/* <FormExam/> */}
      {/* <MockTest/> */}
      <Vstep />
    </div>
  );
}

export default App;
