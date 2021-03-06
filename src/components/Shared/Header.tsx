import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {useSession} from 'hooks/auth';

const Header:React.FC = () => {

    const {user} = useSession();
    return(
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="/home">HomeFitness</Navbar.Brand>
            <Navbar.Toggle aria-controls="homefitness-navbar-nav" />
            <Navbar.Collapse id="homefitness-navbar-nav">
                <Nav className="justify-content-end">
                    {
                        user?
                        <>
                            <Nav.Item>
                                <Nav.Link href="home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="profile">Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="logout"> Logout</Nav.Link>
                            </Nav.Item>
                        </>
                        :
                        <>
                            <Nav.Item>
                                <Nav.Link href="login">Sign In</Nav.Link>
                            </Nav.Item>
                        </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;