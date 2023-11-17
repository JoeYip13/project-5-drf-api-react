import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
    Card,
    Container,
    Media,
    OverlayTrigger,
    Row,
    Col,
    Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { format } from 'date-fns';

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
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/events/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/events/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
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
            console.log(err);
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
            console.log(err);
        }
    };

    const formattedDate = format(new Date(event_date), 'dd-MM-yyy')

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner && eventPage && (
                            <MoreDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
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
                    <Row>
                        <Col md={4}>
                            {location && <Card.Text>{location}</Card.Text>}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            {formattedDate && (
                                <Card.Text>{formattedDate}</Card.Text>
                            )}
                        </Col>
                    </Row>
                </Container>
                <div className={styles.PostBar}>
                    {is_owner ? (
                        // If the user is the owner of the event, allow them to bookmark their own event
                        <span onClick={handleBookmark}>
                            <i
                                className={`fa-regular fa-bookmark ${styles.HeartOutline}`}
                            ></i>
                        </span>
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
                            overlay={<Tooltip>Log in to bookmark events</Tooltip>}
                        >
                            <i className={`fa-regular fa-bookmark`} />
                        </OverlayTrigger>
                    )}
                    {bookmarks_count}
                    <Link to={`/events/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {reviews_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Event;
