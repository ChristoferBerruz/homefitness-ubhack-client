import React from 'react';
import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Header from 'components/Shared/Header';
import Footer from 'components/Shared/Footer';
import {Redirect} from 'react-router-dom';

import {firestore} from "firebaseinit";
import firebase from "firebase";
import {useSession} from "hooks/auth";

interface IProfile{
    username: string,
    email:string,
    preferences:{
        favoriteYoutubers:string[]
    }
}

async function getProfileFromDB({uid}:firebase.User):Promise<IProfile | null>{

    const userRef = firestore.collection('users').doc(uid);
    const snapshot = await userRef.get();

    const data = snapshot.data();
    if(data){

        const preferences = data.preferences? data.preferences: {favoriteYoutubers: []};
        return {
            username: data.displayName,
            email: data.email,
            preferences: preferences
        } as IProfile;
    }

    return null;
    
}


const EditPreferences: React.FC = () => {
    return(
        <Form></Form>
    )
}
const ProfileSummary: React.FC<{profile:IProfile}> = ({profile}) => {
    
    return(
        <Row>
            <Col md={4}>
                <Card>
                    <Card.Header>{profile.username}</Card.Header>
                    <Card.Body>
                        <p>Username: {profile.username}</p>
                        <p>Email: {profile.email}</p>
                        Favorite youtubers:
                        {profile.preferences.favoriteYoutubers.reduce((prev, curvalue) => prev+curvalue)}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

const Profile:React.FC = () => {

    const [profile, setProfile] = useState<null | IProfile>(null);
    const {user} = useSession();

    useEffect(() => {
        
        getProfileFromDB(user!).then((prof) => setProfile(prof));

    }, []);
    return(
        <>
            <Header />
            <Container>
                {profile && <ProfileSummary profile={profile!}/>}
            </Container>
            <Footer />
        </>
    )
}

export default Profile;