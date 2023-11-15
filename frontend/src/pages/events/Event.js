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

const Event = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        title,
        description,
        location,
        image,
        updated_at,
        eventPage,
        setEvents,
        bookmark_id,
        bookmarks_count,
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
                        <Col>{description && <Card.Text>{description}</Card.Text>}</Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            {location && <Card.Text>{location}</Card.Text>}
                        </Col>
                    </Row>
                </Container>
                <div className={styles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>You can't like your own post.</Tooltip>
                            }
                        >
                            <i class="fa-regular fa-bookmark"></i>
                        </OverlayTrigger>
                    ) : bookmark_id ? (
                        <span onClick={handleUnbookmark}>
                            <i
                                className={`fa-solid fa-bookmark ${styles.Heart}`}
                            />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleBookmark}>
                            <i
                                className={`fa-regular fa-bookmark ${styles.HeartOutline}`}
                            ></i>
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to like posts</Tooltip>}
                        >
                            <i className={`fa-regular fa-bookmark`} />
                        </OverlayTrigger>
                    )}
                    {bookmarks_count}
                    <Link to={`/events/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {comments_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Event;
