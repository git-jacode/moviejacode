import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBL1GNP-8Be2tFhSry8e-i2Uvw81uGYcYs',
  authDomain: 'movienowjacode.firebaseapp.com',
  databaseURL: 'https://movienowjacode.firebaseio.com',
  projectId: 'movienowjacode',
  storageBucket: 'movienowjacode.appspot.com',
  messagingSenderId: '854167245209',
  appId: '1:854167245209:web:1468ad12a9760fbe674308',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
