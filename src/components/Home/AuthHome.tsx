import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {apiURL} from 'backend/config';
import axios, {AxiosResponse} from 'axios';


function getWorkouts(jsonPayload: any):Promise<AxiosResponse<IWorkout>>{
    return axios({
        method: "POST",
        url: `${apiURL}/video`,
        data: jsonPayload
    });
}

const UserInputForWorkout:React.FC<{workoutData:IWorkout[]|null, setWorkoutData:Function}> = ({workoutData, setWorkoutData}) => {

    const [show, setShow] = useState(false);
    const [workoutType, setWorkoutType] = useState('abs');
    const [workoutDuration, setWorkoutDuration] = useState(5);

    const handleClose = () => {

        const payload = {
            workout_type: workoutType,
            mins: workoutDuration
        };

        getWorkouts(payload).then((response) => {
            if (workoutData){
                setWorkoutData([response.data, ...workoutData]);
            }else{
                setWorkoutData([response.data]);
            }
           
        });
        
        setShow(false);
    };
    const handleShow = () => setShow(true);
    return(
        <Row>
        <Button variant="primary" onClick={handleShow}>
                Get some workouts
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Get workouts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="workoutForm.workoutType">
                            <Form.Label>Select a workout type</Form.Label>
                            <Form.Control as="select" value={workoutType} 
                                onChange={(event) => setWorkoutType(event.target.value)}>
                                <option value="arms">Arms</option>
                                <option value="booty">Booty</option>
                                <option value="legs">Legs</option>
                                <option value="abs">Abs</option>
                                <option value="cardio">Cardio</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="workoutForm.workoutDuration">
                            <Form.Label>Select a workout duration</Form.Label>
                            <Form.Control as="select" value={workoutDuration}
                                onChange={(event) => setWorkoutDuration(parseInt(event.target.value))}>
                                <option value={5}>5 mins</option>
                                <option value={10}>10 mins</option>
                                <option value={20}>20 mins</option>
                                <option value={30}>30 mins</option>
                                <option value={60}>60 mins</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Search
                </Button>
                </Modal.Footer>
            </Modal>
        </Row>
    )
}
interface IWorkout{
    id:string,
    title:string

}

const WorkoutCard:React.FC<{workout:IWorkout}> = ({workout}) => {
    const videoSrc = "https://www.youtube.com/embed/"+ workout.id
    return(
        <div className="video">
        <Row>
            <Col md={2}></Col>
            <Col md={7}>
                <Card>
                    <Card.Header>{workout.title}</Card.Header>
                        <Card.Body> 
                            <iframe
                                className="workoutCard" 
                                width="560"
                                height="315"
                                src={videoSrc}
                                frameBorder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            >
                            </iframe>
                        </Card.Body>
                </Card>
            </Col>
            <Col md={3}></Col>
        </Row>
        </div>
    )
}

// Component for when the user is authorized
const AuthHome: React.FC = () => {

    const [workoutData, setWorkoutData] = useState<IWorkout[]|null>(null);
    
    return(
        <Container>
            <UserInputForWorkout workoutData={workoutData} setWorkoutData={setWorkoutData}/>
            {workoutData && workoutData.map(workout => <WorkoutCard key={workout.id} workout={workout} />)}
        </Container>
    )
}

export default AuthHome;