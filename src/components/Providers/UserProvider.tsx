import React, { useEffect } from 'react';
import {useState, createContext} from 'react';
import {auth} from 'firebaseinit';
import firebase from 'firebase/app';


export const UserContext = createContext<null|firebase.User>(null);


const UserProvider:React.FC = ({children}) => {

    const [user, setUser] = useState<null|firebase.User>(null);

    useEffect(() => {
        
        auth.onAuthStateChanged(userAuth => {
            setUser(userAuth);
        });

    }, []);

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;