import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Add firebaseconfig from project
let firebaseConfig = {
    apiKey: "AIzaSyApDFEazRTplwkQPpf1rVJxvKdtUSSKbWg",
    authDomain: "homefitness-ubhack.firebaseapp.com",
    projectId: "homefitness-ubhack",
    storageBucket: "homefitness-ubhack.appspot.com",
    messagingSenderId: "431083214643",
    appId: "1:431083214643:web:7b8f94b44d331954055046",
    measurementId: "G-D9VQC0EDV3"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const SignInWithGoogle = () => {
    auth.signInWithPopup(provider);
}