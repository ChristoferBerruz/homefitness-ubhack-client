import React from 'react';
import {useContext} from 'react';
import {SignInWithGoogle, firestore} from 'firebaseinit';
import Header from 'components/Shared/Header';
import Footer from 'components/Shared/Footer';
import {UserContext} from 'components/Providers/UserProvider';
import firebase from "firebase/app";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Attempts to add a user record into the database if it does not exist
function addUserRecord({displayName, email, uid}:firebase.User){
    const userRef = firestore.collection('users').doc(uid);

    userRef.get()
    .then((snapshot) => {

        if(!snapshot.exists){
            userRef.set({
                displayName,
                email,
                uid
            });
        }

    }).catch(err => {
        alert("Something went wrong.." + err);
    });
}

const Login: React.FC = () => {

    const user = useContext(UserContext);
    return(
        <>
            <Header />
                <Container>
                    <Row>
                        <Col>
                            {
                                user?
                                <div>
                                    You are already logged in... {addUserRecord(user!)}
                                </div>
                                :
                                <div>
                                    <h2>Sign in to Home Fitness</h2>
                                    <Button onClick={SignInWithGoogle}> Sign in with Google</Button>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            <Footer />
        </>
    )
}

export default Login;