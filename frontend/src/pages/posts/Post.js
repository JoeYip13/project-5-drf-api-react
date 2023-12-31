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

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        title,
        content,
        model,
        year,
        bhp,
        location,
        is_modified,
        colour,
        image,
        updated_at,
        postPage,
        setPosts,
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
        history.push(`/posts/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`);
            handleClose();
            handleShowAlert(); // Show alert on successful deletion

            setTimeout(() => {
                history.push("/");
            }, 5000)
        } catch (err) {
            // console.log(err);
        }
    };

    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? {
                              ...post,
                              likes_count: post.likes_count + 1,
                              like_id: data.id,
                          }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? {
                              ...post,
                              likes_count: post.likes_count - 1,
                              like_id: null,
                          }
                        : post;
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
                            {is_owner && postPage && (
                                <MoreDropdown
                                    handleEdit={handleEdit}
                                    handleDelete={handleShow}
                                />
                            )}
                        </div>
                    </Media>
                </Card.Body>
                <Link to={`posts/${id}`}>
                    <Card.Img src={image} alt={title} />
                </Link>
                <Card.Body>
                    {title && (
                        <Card.Title className="text-center">{title}</Card.Title>
                    )}
                    <Container>
                        <Row className="py-3">
                            <Col>
                                {content && <Card.Text>{content}</Card.Text>}
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                {model && (
                                    <Card.Text>
                                        <i className="fa-solid fa-certificate"></i>
                                        {model}
                                    </Card.Text>
                                )}
                            </Col>
                            <Col sm={6}>
                                {year && (
                                    <Card.Text>
                                        <i className="fa-solid fa-calendar-check"></i>
                                        {year}
                                    </Card.Text>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                {bhp && (
                                    <Card.Text>
                                        <i className="fa-solid fa-gauge-high"></i>
                                        {bhp}
                                    </Card.Text>
                                )}
                            </Col>
                            <Col sm={6}>
                                {location && (
                                    <Card.Text>
                                        <i className="fa-solid fa-location-dot"></i>
                                        {location}
                                    </Card.Text>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                {is_modified && (
                                    <Card.Text>
                                        <i className="fa-solid fa-gear"></i>
                                        {is_modified}
                                    </Card.Text>
                                )}
                            </Col>
                            <Col sm={6}>
                                {colour && (
                                    <Card.Text>
                                        <i className="fa-solid fa-palette"></i>
                                        {colour}
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
                                        You can&apos;t like your own post.
                                    </Tooltip>
                                }
                            >
                                <i className="fa-regular fa-heart"></i>
                            </OverlayTrigger>
                        ) : like_id ? (
                            <span onClick={handleUnlike}>
                                <i
                                    className={`fa-solid fa-heart ${styles.Heart}`}
                                />
                            </span>
                        ) : currentUser ? (
                            <span onClick={handleLike}>
                                <i
                                    className={`fa-regular fa-heart ${styles.HeartOutline}`}
                                ></i>
                            </span>
                        ) : (
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip>Log in to like posts</Tooltip>
                                }
                            >
                                <i className={`fa-regular fa-heart`} />
                            </OverlayTrigger>
                        )}
                        {likes_count}
                        <Link
                            to={`/posts/${id}`}
                            aria-label={`View comments for post with ID ${id}`}
                        >
                            <i
                                className="far fa-comments"
                                aria-label="Link to view comments"
                            />
                        </Link>
                        {comments_count}
                    </div>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you certain you want to delete? Once confirmed, the post
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

export default Post;
