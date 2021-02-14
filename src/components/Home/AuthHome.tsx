import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import {apiURL} from 'backend/config';


function getWorkouts():IWorkout[]{

   return [{
       videoSrc:"https://www.youtube.com/embed/PGJ43zaam_0"
   }];
}

interface IWorkout{
    videoSrc:string,
}

const WorkoutCard:React.FC<{workout:IWorkout}> = ({workout}) => {

    return(
        <Card>
            <iframe
                className="workoutCard" 
                width="560"
                height="315"
                src={workout.videoSrc}
                frameBorder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">

            </iframe>
        </Card>
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
            {workoutData && workoutData.map(workout => <WorkoutCard key={workout.videoSrc} workout={workout} />)}
        </Container>
    )
}

export default AuthHome;