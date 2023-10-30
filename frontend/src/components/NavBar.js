import React from "react";

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

import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
        >
            <i class="fa-solid fa-circle-plus"></i>Add post
        </NavLink>
    );
    const loggedInIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/feed"
            >
                <i className="fa-solid fa-stream"></i>Feed
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/liked"
            >
                <i className="fa-solid fa-heart"></i>Liked
            </NavLink>
            <NavLink className={styles.NavLink} to="/" onClick={() => {}}>
                <i class="fa-solid fa-right-from-bracket"></i>Sign out
            </NavLink>
            <NavLink
                className={styles.NavLink}
                to={`/profiles/${currentUser?.profile_id}`}
            ></NavLink>
            <Avatar
                src={currentUser?.profile_image}
                text="Profile"
                height={50}
            />
        </>
    );
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
                {currentUser && addPostIcon}
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
