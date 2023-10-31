import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

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
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

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
                        {is_owner && postPage && "..."}
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
                {content && <Card.Text>{content}</Card.Text>}
                {model && <Card.Text>{model}</Card.Text>}
                {year && <Card.Text>{year}</Card.Text>}
                {bhp && <Card.Text>{bhp}</Card.Text>}
                {location && <Card.Text>{location}</Card.Text>}
                {is_modified && <Card.Text>{is_modified}</Card.Text>}
                {colour && <Card.Text>{colour}</Card.Text>}
                <div className={styles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>You can't like your own post.</Tooltip>
                            }
                        >
                            <i class="fa-regular fa-heart"></i>
                        </OverlayTrigger>
                    ) : like_id ? (
                        <span onClick={() => {}}>
                            <i
                                className={`fa-regular fa-heart`}
                            />
                        </span>
                    ) : currentUser ? (
                        <span onClick={() => {}}>
                            <i
                                className={`fa-regular fa-heart ${styles.HeartOutline}`}
                            ></i>
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to like posts</Tooltip>}
                        >
                            <i
                                className={`fa-regular fa-heart`}
                            />
                        </OverlayTrigger>
                    )}
                    {likes_count}
                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {comments_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;
