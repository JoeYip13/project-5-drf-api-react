import React, { useContext } from "react";

// Bootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

// Import Logo
import logo from "../assets/M-logo.png";

// CSS Styles
import styles from "../styles/NavBar.module.css";

// React router
import { NavLink } from "react-router-dom";

import { CurrentUserContext } from "../App";

const NavBar = () => {
    const currentUser = useContext(CurrentUserContext);
    const loggedInIcons = <>{currentUser?.username}</>
    const loggedOutIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                exact
                to="/signup"
            >
                <i class="fa-solid fa-user-plus"></i>Sign Up
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                exact
                to="/signin"
            >
                <i class="fa-solid fa-right-to-bracket"></i>Sign In
            </NavLink>
        </>
    );

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand className={styles.logo}>
                        Ultimate <img src={logo} alt="logo" height="45" /> Car
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            exact
                            to="/"
                        >
                            <i class="fa-solid fa-house"></i>Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
