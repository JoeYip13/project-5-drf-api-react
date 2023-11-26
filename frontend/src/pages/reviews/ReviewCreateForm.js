import React, { useState } from "react";
import { Link } from "react-router-dom";
// Bootstrap imports
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { Container } from "react-bootstrap";

function ReviewCreateForm(props) {
    const { event, setEvent, setReviews, profileImage, profile_id, owner } = props;
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");
    const [errors, setErrors] = useState({});

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axiosRes.post("/reviews/", {
                review,
                rating,
                event,
            });
            setReviews((prevReviews) => ({
                ...prevReviews,
                results: [data, ...prevReviews.results],
            }));
            setEvent((prevEvent) => ({
                results: [
                    {
                        ...prevEvent.results[0],
                        reviews_count: prevEvent.results[0].reviews_count + 1,
                    },
                ],
            }));
            setReview("");
            setRating("");
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors({ detail: err.response?.data.detail });
                // console.log(err.response);
            }
            // console.log(err);
        }
    };

    return (
        <Form className="mt-2" onSubmit={handleSubmit}>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profileImage} />
                <span className={styles.Owner}>{owner}</span>
            </Link>

            <Container>
                <Row>
                    <Col md={1} lg={1}></Col>
                    <Col xs={4}>
                        <Form.Group>
                            <Form.Label className="d-none">Rating</Form.Label>
                            <Form.Control
                                className={styles.Form}
                                as="select"
                                name="rating"
                                value={rating}
                                onChange={handleRatingChange}
                            >
                                <option key="blankChoice" hidden value>
                                    {" "}
                                    Rating{" "}
                                </option>
                                <option value="5 stars">5 stars</option>
                                <option value="4 stars">4 stars</option>
                                <option value="3 stars">3 stars</option>
                                <option value="2 stars">2 stars</option>
                                <option value="1 star">1 star</option>
                                <option value="0 stars">0 stars</option>
                            </Form.Control>
                        </Form.Group>
                        {errors.rating?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col md={1} lg={1}></Col>
                    <Col xs={11}>
                        <Form.Group>
                            <Form.Label className="d-none">Review</Form.Label>
                            <Form.Control
                                className={styles.Form}
                                placeholder="My review..."
                                as="textarea"
                                value={review}
                                onChange={handleReviewChange}
                                rows={1}
                            />
                        </Form.Group>
                        {errors.review?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                    </Col>
                </Row>
            </Container>
            <button
                className={`${styles.Button} btn d-block ml-auto`}
                disabled={!review.trim()}
                type="submit"
            >
                Post
            </button>
            {errors.detail && (
                <Alert variant="warning" className="mt-3">
                    {errors.detail}
                </Alert>
            )}
        </Form>
    );
}

export default ReviewCreateForm;
