import React from 'react';
import {auth} from 'firebaseinit';

import {useSession} from 'hooks/auth';

const Logout:React.FC = () => {

    const {user} = useSession();
    
    return user && (
        <button onClick={() => auth.signOut()} > Sign out</button>
    )
}

export default Logout;