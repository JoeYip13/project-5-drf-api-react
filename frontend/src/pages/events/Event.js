import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// Bootstrap components
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Event = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        reviews_count,
        title,
        description,
        location,
        image,
        updated_at,
        eventPage,
        setEvents,
        bookmark_id,
        bookmarks_count,
        event_date,
        event_time,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Alert for delete post
    const [showAlert, setShowAlert] = useState(false);
    const handleCloseAlert = () => setShowAlert(false);
    const handleShowAlert = () => setShowAlert(true);

    const handleEdit = () => {
        history.push(`/events/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/events/${id}/`);
            handleClose();
            handleShowAlert(); // Show alert on successful deletion

            setTimeout(() => {
                history.push("/events");
            }, 5000);
        } catch (err) {
            // console.log(err);
        }
    };

    const handleBookmark = async () => {
        try {
            const { data } = await axiosRes.post("/bookmarks/", { event: id });
            setEvents((prevEvents) => ({
                ...prevEvents,
                results: prevEvents.results.map((event) => {
                    return event.id === id
                        ? {
                              ...event,
                              bookmarks_count: event.bookmarks_count + 1,
                              bookmark_id: data.id,
                          }
                        : event;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    const handleUnbookmark = async () => {
        try {
            await axiosRes.delete(`/bookmarks/${bookmark_id}/`);
            setEvents((prevEvents) => ({
                ...prevEvents,
                results: prevEvents.results.map((event) => {
                    return event.id === id
                        ? {
                              ...event,
                              bookmarks_count: event.bookmarks_count - 1,
                              bookmark_id: null,
                          }
                        : event;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <>
            {/* React Bootstrap Alert */}
            <Alert
                show={showAlert}
                variant="success"
                onClose={handleCloseAlert}
                dismissible
            >
                <Alert.Heading>Post Deleted Successfully!</Alert.Heading>
                <p>The post has been permanently removed.</p>
                <div className="d-flex justify-content-end">
                    <Button
                        onClick={handleCloseAlert}
                        variant="outline-success"
                    >
                        Close
                    </Button>
                </div>
            </Alert>
            <Card className={styles.Post}>
                <Card.Body>
                    <Media className="align-items-center justify-content-between">
                        <Link
                            to={`/profiles/${profile_id}`}
                            aria-label={`Link to ${owner}'s profile`}
                        >
                            <Avatar src={profile_image} height={55} />
                            {owner}
                        </Link>
                        <div className="d-flex align-items-center">
                            <span>{updated_at}</span>
                            {is_owner && eventPage && (
                                <MoreDropdown
                                    handleEdit={handleEdit}
                                    handleDelete={handleShow}
                                />
                            )}
                        </div>
                    </Media>
                </Card.Body>
                <Link to={`events/${id}`}>
                    <Card.Img src={image} alt={title} />
                </Link>
                <Card.Body>
                    {title && (
                        <Card.Title className="text-center">{title}</Card.Title>
                    )}
                    <Container>
                        <Row>
                            <Col>
                                {description && (
                                    <Card.Text>{description}</Card.Text>
                                )}
                            </Col>
                        </Row>
                        <Row className="py-3">
                            <Col md={4}>
                                {location && (
                                    <Card.Text>
                                        <i className="fa-solid fa-location-dot"></i>
                                        Location: {location}
                                    </Card.Text>
                                )}
                            </Col>
                            <Col md={4}>
                                {event_date && (
                                    <Card.Text>
                                        <i className="fa-solid fa-calendar-days"></i>
                                        Date: {event_date}
                                    </Card.Text>
                                )}
                            </Col>
                            <Col md={4}>
                                {event_time && (
                                    <Card.Text>
                                        <i className="fa-solid fa-clock"></i>
                                        Time: {event_time}
                                    </Card.Text>
                                )}
                            </Col>
                        </Row>
                    </Container>
                    <div className={styles.PostBar}>
                        {is_owner ? (
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip>
                                        You can&apos;t bookmark your own event.
                                    </Tooltip>
                                }
                            >
                                <i className="fa-regular fa-bookmark"></i>
                            </OverlayTrigger>
                        ) : // If the event is already bookmarked, show a filled heart icon and allow the user to unbookmark
                        bookmark_id ? (
                            <span onClick={handleUnbookmark}>
                                <i
                                    className={`fa-solid fa-bookmark ${styles.Heart}`}
                                />
                            </span>
                        ) : currentUser ? (
                            // If the event is not bookmarked and the user is logged in, show an outline heart icon and allow the user to bookmark
                            <span onClick={handleBookmark}>
                                <i
                                    className={`fa-regular fa-bookmark ${styles.HeartOutline}`}
                                ></i>
                            </span>
                        ) : (
                            // If the event is not bookmarked and the user is not logged in, show an outline heart icon with a tooltip prompting to log in
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip>Log in to bookmark events</Tooltip>
                                }
                            >
                                <i className={`fa-regular fa-bookmark`} />
                            </OverlayTrigger>
                        )}
                        {bookmarks_count}
                        <Link
                            to={`/events/${id}`}
                            aria-label={`View comments for post with ID ${id}`}
                        >
                            <i className="far fa-comments" />
                        </Link>
                        {reviews_count}
                    </div>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you certain you want to delete? Once confirmed, the event
                    will be permanently removed.
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className={`${btnStyles.Button} ${btnStyles.Black}`}
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        className={`${btnStyles.Button} ${btnStyles.Black}`}
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Event;
