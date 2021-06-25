import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDTSh79FKlaD1IX_1lqRwbNriWaaQEI1OY",
    authDomain: "story-hub-edcc1.firebaseapp.com",
    projectId: "story-hub-edcc1",
    storageBucket: "story-hub-edcc1.appspot.com",
    messagingSenderId: "970919021475",
    appId: "1:970919021475:web:ec3d7e0a9bb1be76f56816"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);






export default firebase.firestore();