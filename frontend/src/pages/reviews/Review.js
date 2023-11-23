import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import ReviewEditForm from "../reviews/ReviewEditForm";

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
                <Link to={`/profiles/${profile_id}`}>
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
                        <p>{rating} <br /> {review}</p>
                    )}
                </Media.Body>
                {is_owner && !showEditForm && (
                    <MoreDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                )}
            </Media>
        </>
    );
};

export default Review;
