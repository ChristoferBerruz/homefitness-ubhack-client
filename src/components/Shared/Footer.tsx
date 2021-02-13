import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer:React.FC = () => {
    return(
        <footer className="footer">
            <Container>
                &copy; HomeFitness {new Date().getFullYear()}
            </Container>
        </footer>
    )
}

export default Footer;