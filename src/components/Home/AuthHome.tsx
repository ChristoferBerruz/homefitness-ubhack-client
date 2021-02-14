import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { stringify } from 'querystring';


function getWorkouts():IWorkout[]{

   return [{
       id: "Y2eOW7XYWxc",
       title: "20 MIN FULL BODY WORKOUT - Intense Version / No Equipment I Pamela Reif"
   },
   {
       id: "ipNcdQAfo7Q",
       title: "How to GET ABS at a HIGHER BODY FAT % | NO PLANKS | The Science of a Six Pack"
   }];
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

    useEffect(() => {

        const workouts = getWorkouts();
        setWorkoutData(workouts);

    },[]);
    return(
            <Container>
                {workoutData && workoutData.map(workout => <WorkoutCard key={workout.id} workout={workout} />)}
            </Container>
    )
}

export default AuthHome;