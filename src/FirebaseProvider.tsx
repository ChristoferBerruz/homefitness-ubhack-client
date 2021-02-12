import React, { useState } from 'react';
import {createContext} from 'react';
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

const auth = firebase.auth();
const firestore = firebase.firestore();

export const FirebaseContext = createContext({auth: auth, firestore:firestore});

const FirebaseProvider:React.FC = ({children}) => {
    
    const [context, setContext] = useState({auth:auth, firestore:firestore});

    return(
        <FirebaseContext.Provider value={context}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider;