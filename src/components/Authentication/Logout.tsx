import React from 'react';
import {useContext} from 'react';
import {auth} from 'firebaseinit';
import {UserContext} from 'components/Providers/UserProvider';

const Logout:React.FC = () => {

    const user = useContext(UserContext);
    return user && (
        <button onClick={() => auth.signOut()} > Sign out</button>
    )
}

export default Logout;