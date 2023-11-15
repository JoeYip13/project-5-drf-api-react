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

    // const handleLike = async () => {
    //     try {
    //         const { data } = await axiosRes.post("/likes/", { post: id });
    //         setPosts((prevPosts) => ({
    //             ...prevPosts,
    //             results: prevPosts.results.map((post) => {
    //                 return post.id === id
    //                     ? {
    //                           ...post,
    //                           likes_count: post.likes_count + 1,
    //                           like_id: data.id,
    //                       }
    //                     : post;
    //             }),
    //         }));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // const handleUnlike = async () => {
    //     try {
    //         await axiosRes.delete(`/likes/${like_id}/`);
    //         setPosts((prevPosts) => ({
    //             ...prevPosts,
    //             results: prevPosts.results.map((post) => {
    //                 return post.id === id
    //                     ? {
    //                           ...post,
    //                           likes_count: post.likes_count - 1,
    //                           like_id: null,
    //                       }
    //                     : post;
    //             }),
    //         }));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

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
                    {/* {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>You can't like your own post.</Tooltip>
                            }
                        >
                            <i class="fa-regular fa-heart"></i>
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
                            overlay={<Tooltip>Log in to like posts</Tooltip>}
                        >
                            <i className={`fa-regular fa-heart`} />
                        </OverlayTrigger>
                    )}
                    {likes_count} */}
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
