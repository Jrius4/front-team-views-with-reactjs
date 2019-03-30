import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAfLeclLrkmf_P6eR6qFK_2Tx62fz5HGhU",
    authDomain: "police-fc.firebaseapp.com",
    databaseURL: "https://police-fc.firebaseio.com",
    projectId: "police-fc",
    storageBucket: "police-fc.appspot.com",
    messagingSenderId: "821153870600"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;