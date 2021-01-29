import firebase from "firebase/app";
import '@firebase/storage';
import '@firebase/firestore';
import "firebase/database";
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDiBkZqfQVr-348Rzm0BtdjnM8yVwlG_pw",
    authDomain: "giphy-soapbox-app.firebaseapp.com",
    projectId: "giphy-soapbox-app",
    storageBucket: "giphy-soapbox-app.appspot.com",
    messagingSenderId: "937904226826",
    appId: "1:937904226826:web:c412c5d6a3eb3fddea55f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // const giphyStorage = firebase.storage();
  // const giphyFirestore = firebase.firestore();

  // export { giphyStorage, giphyFirestore };

  export default firebase


