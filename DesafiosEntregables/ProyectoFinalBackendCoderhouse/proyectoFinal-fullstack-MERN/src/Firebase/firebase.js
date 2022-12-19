import firebase from "firebase/app";
import 'firebase/firestore';

//Datos de la Configuración del proyecto: lukc-ecarrito-npx, en Firebase.
var firebaseConfig = {
    apiKey: "AIzaSyBPrnWg_Tt9ErHnJ5KuvOa0-v11wQQ2rxQ",
    authDomain: "lukc-ecarrito-npx.firebaseapp.com",
    projectId: "lukc-ecarrito-npx",
    storageBucket: "lukc-ecarrito-npx.appspot.com",
    messagingSenderId: "25029793759",
    appId: "1:25029793759:web:ad084d6b7367a385af166a",
    measurementId: "G-GGDY7L6CMQ"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();