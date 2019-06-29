import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCBuO3Sun0x-K5m6XAidpRELZoVwMNU0Yo",
  authDomain: "expensify-8adb2.firebaseapp.com",
  databaseURL: "https://expensify-8adb2.firebaseio.com",
  projectId: "expensify-8adb2",
  storageBucket: "expensify-8adb2.appspot.com",
  messagingSenderId: "484908784088",
  appId: "1:484908784088:web:d4ad8a2801db7e77"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleProvider, database as default };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref().set({
//   name: "Eslam allam",
//   age: 27,
//   location: {
//     city: "Cairo",
//     Country: "Egypt"
//   }
// });

// database.ref("age").set(26);
