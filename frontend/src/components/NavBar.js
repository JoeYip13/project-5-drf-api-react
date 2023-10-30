import React from 'react';

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

// Import Logo
import logo from '../assets/M-logo.png';

// CSS Styles
import styles from '../styles/NavBar.module.css';

// React router
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand className={styles.logo}>Ultimate <img src={logo} alt="logo" height="45" /> Car</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className={styles.NavLink} activeClassName={styles.Active} exact to="/"><i class="fa-solid fa-house"></i>Home</NavLink>
                        <NavLink className={styles.NavLink} activeClassName={styles.Active} exact to="/signup"><i class="fa-solid fa-user-plus"></i>Sign Up</NavLink>
                        <NavLink className={styles.NavLink} activeClassName={styles.Active} exact to="/signin"><i class="fa-solid fa-right-to-bracket"></i>Sign In</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;