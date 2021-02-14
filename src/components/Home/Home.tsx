import React from 'react';
import Header from 'components/Shared/Header';
import Footer from 'components/Shared/Footer';

import AuthHome from 'components/Home/AuthHome';
import NoAuthHome from 'components/Home/NoAuthHome';
import {useSession} from "hooks/auth";

const Home:React.FC = () => {

    const {user} = useSession();
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