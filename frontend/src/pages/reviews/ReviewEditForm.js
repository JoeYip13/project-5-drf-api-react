import React, { useState } from "react";

// Bootstrap imports
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CommentCreateEditForm.module.css";

function ReviewEditForm(props) {
    const { id, review, rating, setShowEditForm, setReviews } = props;

    const [formReview, setFormReview] = useState(review);
    const [formRating, setFormRating] = useState(rating);

    const handleReviewChange = (event) => {
        setFormReview(event.target.value);
    };
    const handleRatingChange = (event) => {
        setFormRating(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put(`/reviews/${id}/`, {
                review: formReview.trim(),
                rating: formRating.trim(),
            });
            setReviews((prevReviews) => ({
                ...prevReviews,
                results: prevReviews.results.map((review) => {
                    return review.id === id
                        ? {
                              ...review,
                              review: formReview.trim(),
                              rating: formRating.trim(),
                              updated_at: "now",
                          }
                        : review;
                }),
            }));
            setShowEditForm(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col xs lg="3">
                    <Form.Group className="pr-1">
                        <Form.Control
                            className={styles.Form}
                            as="select"
                            value={formRating}
                            onChange={handleRatingChange}
                        >
                            <option value="5 stars">5 stars</option>
                            <option value="4 stars">4 stars</option>
                            <option value="3 stars">3 stars</option>
                            <option value="2 stars">2 stars</option>
                            <option value="1 star">1 star</option>
                            <option value="0 stars">0 stars</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col xs lg="9">
                    <Form.Group className="pr-1">
                        <Form.Control
                            className={styles.Form}
                            as="textarea"
                            value={formReview}
                            onChange={handleReviewChange}
                            rows={1}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <div className="text-right">
                <button
                    className={styles.Button}
                    onClick={() => setShowEditForm(false)}
                    type="button"
                >
                    cancel
                </button>
                <button
                    className={styles.Button}
                    disabled={!review.trim()}
                    type="submit"
                >
                    save
                </button>
            </div>
        </Form>
    );
}

export default ReviewEditForm;
