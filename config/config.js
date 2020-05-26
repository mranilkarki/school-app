import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyB2iEkj32IhswkGD9919k_CCpq0IRX5PHk",
  authDomain: "login-32abc.firebaseapp.com",
  databaseURL: "https://login-32abc.firebaseio.com",
  projectId: "login-32abc",
  storageBucket: "login-32abc.appspot.com",
  // messagingSenderId: "209680083671",
  // appId: "1:209680083671:web:159ff5d9a8d2823dd61e92",
  // measurementId: "G-RX1M36RZ58"
};
  const Firebase=firebase.initializeApp(firebaseConfig);
  export default Firebase;