import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Event from './Event';
import ReviewCreateForm from "../reviews/ReviewCreateForm";
import Review from '../reviews/Review';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from '../profiles/PopularProfiles';

function EventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState({ results: [] });
    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [reviews, setReviews] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: event }, {data: reviews}] = await Promise.all([
                    await axiosReq.get(`/events/${id}`),
                    await axiosReq.get(`/reviews/?event=${id}`)
                ]);
                setEvent({ results: [event] });
                setReviews(reviews)
                // console.log(event);
            } catch (error) {
                // console.log(error);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <PopularProfiles mobile />
                <Event {...event.results[0]} setEvents={setEvent} eventPage />
                <Container className={appStyles.Content}>
                    {currentUser ? (
                        <ReviewCreateForm
                            owner={currentUser.username}
                            profile_id={currentUser.profile_id}
                            profileImage={profile_image}
                            event={id}
                            setEvent={setEvent}
                            setReviews={setReviews}
                        />
                    ) : reviews.results.length ? (
                        "Reviews"
                    ) : null}
                    {reviews.results.length ? (
                        <InfiniteScroll
                            dataLength={reviews.results.length}
                            loader={<Asset spinner />}
                            hasMore={!!reviews.next}
                            next={() => fetchMoreData(reviews, setReviews)}
                        >
                            {reviews.results.map((review) => (
                                <Review
                                    key={review.id}
                                    {...review}
                                    setEvent={setEvent}
                                    setReviews={setReviews}
                                />
                            ))}
                        </InfiniteScroll>
                    ) : currentUser ? (
                        <span>No reviews yet, be the first to review!</span>
                    ) : (
                        <span>No reviews... yet</span>
                    )}
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles />
            </Col>
        </Row>
    );
}

export default EventPage;
