import React from 'react';
import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

        const preferences = data.preferences? data.preferences: {favoriteYoutubers: ['']};
        return {
            username: data.displayName,
            email: data.email,
            preferences: preferences
        } as IProfile;
    }

    return null;
    
}

async function UpdateFavoriteYoutuber({uid}:firebase.User){

}


const EditPreferences: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" style={{marginTop:"20px"}} onClick={handleShow}>
                Edit preferences
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit preferences</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="favoriteYoutuber">
                            <Form.Label>Favorite Youtuber</Form.Label>
                            <Form.Control type="text" placeholder="Favorite Youtuber" />
                            <Form.Text className="text-muted">
                                Don't forget to save changes to apply them.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
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
                        Favorite youtuber: {profile.preferences.favoriteYoutubers.reduce((prev, curvalue) => prev+curvalue)}

                        <EditPreferences />
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