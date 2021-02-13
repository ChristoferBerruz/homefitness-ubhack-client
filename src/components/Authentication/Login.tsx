import React from 'react';
import {SignInWithGoogle} from 'firebaseinit';

const Login: React.FC = () => {

    return(
        <div>
            Try login in!
            <button onClick={SignInWithGoogle}> Login In </button>
        </div>
    )
}

export default Login;