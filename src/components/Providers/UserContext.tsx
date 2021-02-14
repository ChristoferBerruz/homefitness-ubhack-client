import {createContext} from 'react';
import firebase from 'firebase/app';

interface IUserContext{
    user: null|firebase.User
}
export const UserContext = createContext<IUserContext>({user:null});
