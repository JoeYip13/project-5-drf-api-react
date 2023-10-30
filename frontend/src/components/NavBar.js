import React from 'react';

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

// Import Logo
import logo from '../assets/M-logo.png';

// CSS Styles
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <Navbar.Brand className={styles.logo}>Ultimate <img src={logo} alt="logo" height="45" /> Car</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><i class="fa-solid fa-house"></i>Home</Nav.Link>
                        <Nav.Link><i class="fa-solid fa-user-plus"></i>Sign Up</Nav.Link>
                        <Nav.Link><i class="fa-solid fa-right-to-bracket"></i>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;