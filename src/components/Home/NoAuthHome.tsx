import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

// This components renders when the user is not logged in
const NoAuthHome:React.FC = () => {
    return(
        <Jumbotron fluid>
            <Container>
                <h1> Home Fitness</h1>
                <p>Quickly organize your workous to stay fit at home.</p>
            </Container>
        </Jumbotron>
    )
}

export default NoAuthHome;