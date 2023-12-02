import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import ReviewEditForm from "../reviews/ReviewEditForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Review = (props) => {
    const {
        profile_id,
        profile_image,
        owner,
        updated_at,
        review,
        rating,
        id,
        setEvent,
        setReviews,
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/reviews/${id}/`);
            setEvent((prevEvent) => ({
                results: [
                    {
                        ...prevEvent.results[0],
                        reviews_count: prevEvent.results[0].reviews_count - 1,
                    },
                ],
            }));

            setReviews((prevReviews) => ({
                ...prevReviews,
                results: prevReviews.results.filter(
                    (review) => review.id !== id
                ),
            }));
        } catch (err) {}
    };

    return (
        <>
            <hr />
            <Media>
                <Link
                    to={`/profiles/${profile_id}`}
                    aria-label={`Link to ${owner}'s profile`}
                >
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    {showEditForm ? (
                        <ReviewEditForm
                            id={id}
                            profile_id={profile_id}
                            review={review}
                            rating={rating}
                            profileImage={profile_image}
                            setReviews={setReviews}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p>
                            {rating} <br /> {review}
                        </p>
                    )}
                </Media.Body>
                {is_owner && !showEditForm && (
                    <MoreDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleShow}
                    />
                )}
            </Media>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete your review?
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

export default Review;
