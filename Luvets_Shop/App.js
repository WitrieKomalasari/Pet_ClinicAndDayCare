import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './src/Roots/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDJvV8oETfLJLHREAHeDA199a9R_K1UxkI",
//   authDomain: "petclinicandcare-a0beb.firebaseapp.com",
//   projectId: "petclinicandcare-a0beb",
//   storageBucket: "petclinicandcare-a0beb.appspot.com",
//   messagingSenderId: "467842581138",
//   appId: "1:467842581138:web:5f2c4d9ab058b98bfc9c4b",
//   measurementId: "G-57ZVXDRKQV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
