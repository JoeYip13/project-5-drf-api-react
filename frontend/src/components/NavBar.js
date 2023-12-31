import React from "react";
import { useState } from "react";

// Bootstrap Components
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

// Import Logo
import logo from "../assets/M-logo.png";

// CSS Styles
import styles from "../styles/NavBar.module.css";
import btnStyles from "../styles/Button.module.css";

// React router
import { NavLink } from "react-router-dom";

import {
    useCurrentUser,
    useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";

// Axios
import axios from "axios";

import { removeTokenTimestamp } from "../utils/utils";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const history = useHistory(); // Add this line to get access to the history object

    const [toggleNavBar, setToggleNavBar] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [loading, setLoading] = useState(false);

    const handleSignOut = async () => {
        setLoading(true); // Set loading to true
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            // console.log(err);
        } finally {
            // Delay for 3 seconds
            setTimeout(() => {
                handleClose(); // Close the modal
                setLoading(false); // Rest loading state
                history.push("/");
            }, 2000);
        }
    };

    const handleSignOutClick = (event) => {
        event.preventDefault(); // Prevent the default behavior of the link
        handleShow(); // Open the sign-out confirmation modal
    };

    const location = useLocation();
    // Check if the current location matches the events page
    const isOnEventsPage = location.pathname === "/events";
    const isOnEventCreatePage = location.pathname === "/events/create";
    const isOnEventDetailPage = /^\/events\/\d+$/.test(location.pathname);

    const addIcon = isOnEventsPage ? (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/events/create"
            aria-label="Add event"
        >
            <i className="fa-solid fa-circle-plus" aria-hidden="true"></i>Add
            Event
        </NavLink>
    ) : isOnEventCreatePage ? (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/events/create"
            aria-label="Add event"
        >
            <i className="fa-solid fa-circle-plus" aria-hidden="true"></i>Add
            Event
        </NavLink>
    ) : isOnEventDetailPage ? (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/events/create"
            aria-label="Add event"
        >
            <i className="fa-solid fa-circle-plus" aria-hidden="true"></i>Add
            Event
        </NavLink>
    ) : (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
            aria-label="Add post"
        >
            <i className="fa-solid fa-circle-plus"></i>Add Post
        </NavLink>
    );
    const loggedInIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                to="#"
                onClick={handleSignOutClick} // Use handleSignOutClick instead of handleShow
                aria-label="Sign out"
            >
                <i className="fa-solid fa-right-from-bracket"></i>Sign out
            </NavLink>
            <NavLink
                className={styles.NavLink}
                to={`/profiles/${currentUser?.profile_id}`}
                aria-label={`Link to ${currentUser?.username}'s profile`}
            >
                <Avatar
                    src={currentUser?.profile_image}
                    text={currentUser?.username}
                    height={50}
                    aria-hidden="true"
                />
            </NavLink>
            <NavDropdown
                id="collasible-nav-dropdown"
                menuAlign={{ lg: "right" }}
                title={
                    <span className={styles.visuallyHidden}>
                        Dropdown Arrow
                    </span>
                }
            >
                <NavDropdown.Item
                    onClick={() => {
                        setToggleNavBar(!toggleNavBar);
                    }}
                    label="Toggle Navbar"
                >
                    <NavLink
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                        to="/liked"
                        aria-label="Liked"
                    >
                        <i className="fa-solid fa-heart"></i>Liked
                    </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item
                    onClick={() => {
                        setToggleNavBar(!toggleNavBar);
                    }}
                >
                    <NavLink
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                        to="/bookmarked"
                        aria-label="Bookmarked"
                    >
                        <i className="fa-solid fa-bookmark"></i>
                        Bookmarked
                    </NavLink>
                </NavDropdown.Item>
            </NavDropdown>
        </>
    );
    const loggedOutIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                exact
                to="/signup"
                aria-label="Link to sign up"
            >
                <i className="fa-solid fa-user-plus"></i>Sign Up
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                exact
                to="/signin"
                aria-label="Link to sign in"
            >
                <i className="fa-solid fa-right-to-bracket"></i>Sign In
            </NavLink>
        </>
    );

    return (
        <>
            <Navbar
                expanded={toggleNavBar}
                className={styles.NavBar}
                expand="md"
                fixed="top"
            >
                <Container>
                    <NavLink to="/" aria-label="Link to home page">
                        <Navbar.Brand
                            className={styles.logo}
                            aria-label="Link to home page"
                        >
                            <span className={styles.logoText}>Ultimate</span>{" "}
                            <img
                                src={logo}
                                alt="Ultimate M Car logo"
                                height="45"
                            />{" "}
                            <span className={styles.logoText}>Car</span>
                        </Navbar.Brand>
                    </NavLink>
                    {currentUser && addIcon}
                    <Navbar.Toggle
                        onClick={() => setToggleNavBar(!toggleNavBar)}
                        aria-controls="responsive-navbar-nav"
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink
                                className={styles.NavLink}
                                activeClassName={styles.Active}
                                exact
                                to="/"
                                aria-label="Link to feed page"
                            >
                                <i className="fa-solid fa-bars-staggered"></i>
                                Feed
                            </NavLink>
                            <NavLink
                                className={styles.NavLink}
                                activeClassName={styles.Active}
                                to="/events"
                                aria-label="Link to events page"
                            >
                                <i className="fa-regular fa-calendar-days"></i>
                                Events
                            </NavLink>
                            {currentUser ? loggedInIcons : loggedOutIcons}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Sign Out</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loading ? (
                        <p>Signing out...</p>
                    ) : (
                        <p>Are you sure you want to sign out?</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {!loading && (
                        <>
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Black}`}
                                onClick={handleClose}
                            >
                                No
                            </Button>
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Black}`}
                                onClick={handleSignOut}
                            >
                                Yes
                            </Button>
                        </>
                    )}
                    {loading && (
                        <Spinner
                            animation="border"
                            variant="light"
                            role="status"
                        >
                            <span className="sr-only">Signing out...</span>
                        </Spinner>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default NavBar;
