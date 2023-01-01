import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCLj-yfSlJhsqjGxRnDWfZCVfFtEiVxkzk",
    authDomain: "music-a50eb.firebaseapp.com",
    projectId: "music-a50eb",
    storageBucket: "music-a50eb.appspot.com",
    messagingSenderId: "615320539057",
    appId: "1:615320539057:web:ef0545a80e34226db63790"
};

export default firebase.initializeApp(firebaseConfig);