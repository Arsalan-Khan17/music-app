import { initializeApp } from 'firebase/app';
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCLj-yfSlJhsqjGxRnDWfZCVfFtEiVxkzk",
    authDomain: "music-a50eb.firebaseapp.com",
    projectId: "music-a50eb",
    storageBucket: "music-a50eb.appspot.com",
    messagingSenderId: "615320539057",
    appId: "1:615320539057:web:ef0545a80e34226db63790"
};

const app =  initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


const userCollection = collection(db,'users');


export {
    auth,
    db,
    userCollection,
    storage,
    onAuthStateChanged
};