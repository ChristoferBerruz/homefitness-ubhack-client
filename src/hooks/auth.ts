import {useContext, useState, useEffect} from 'react';
import {UserContext} from "components/Providers/UserContext";
import firebase from "firebase/app";
import {auth} from "firebaseinit";

// To be used by any component looking to access state
export const useSession = () => {
    const user = useContext(UserContext);
    return user;
}

// To be used by a provider initializer
export const useAuth = () => {

    const [state, setState] = useState(() => { 
        const user = auth.currentUser;
         return { initializing: !user, user, }
    });

    function onChange(user:null|firebase.User) {
      setState({ initializing: false, user })
    }
  
    useEffect(() => {
      // listen for auth state changes
      const unsubscribe = auth.onAuthStateChanged(onChange)
      // unsubscribe to the listener when unmounting
      return () => unsubscribe()
    }, [])
  
    return state
  }