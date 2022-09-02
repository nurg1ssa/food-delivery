import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCO0wS0-PnAhmh25biW909-DXHQjbqk_ms",
    authDomain: "restaurantapp-4fc54.firebaseapp.com",
    databaseURL: "https://restaurantapp-4fc54-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-4fc54",
    storageBucket: "restaurantapp-4fc54.appspot.com",
    messagingSenderId: "549001372550",
    appId: "1:549001372550:web:f22ffcaaadea4a6fd38207"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)


export {app, firestore, storage}