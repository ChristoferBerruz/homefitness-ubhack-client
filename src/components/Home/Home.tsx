import React from 'react';
import {useContext} from 'react';
import {UserContext} from 'components/Providers/UserProvider';
import Header from 'components/Shared/Header';
import Footer from 'components/Shared/Footer';

import AuthHome from 'components/Home/AuthHome';
import NoAuthHome from 'components/Home/NoAuthHome';

const Home:React.FC = () => {

    const user = useContext(UserContext);
    return(
        <>
            <Header />
            {
                user?
                <AuthHome />
                :
                <NoAuthHome />
            }
            <Footer />
        </>
    )
}

export default Home;