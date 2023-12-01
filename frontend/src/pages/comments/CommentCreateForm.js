import React, { useState } from "react";
import { Link } from "react-router-dom";

import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
    const { post, setPost, setComments, profileImage, profile_id } = props;
    const [content, setContent] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) => {
        setContent(event.target.value);
        // Clear the error message when the user starts typing
        setErrorMessage("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check if the content is empty or contains only whitespace
        if (!content.trim()) {
            setErrorMessage("Please enter a comment before posting.");
            return;
        }
        try {
            const { data } = await axiosRes.post("/comments/", {
                content,
                post,
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: [data, ...prevComments.results],
            }));
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count + 1,
                    },
                ],
            }));
            setContent("");
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <Form className="mt-2" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profileImage} />
                    </Link>
                    <Form.Control
                        className={styles.Form}
                        placeholder="my comment..."
                        as="textarea"
                        value={content}
                        onChange={handleChange}
                        rows={2}
                    />
                </InputGroup>
            </Form.Group>
            {errorMessage && (
                    <Alert variant="danger" className="mt-2">
                        {errorMessage}
                    </Alert>
                )}
            <button
                className={`${styles.Button} btn d-block ml-auto`}
                disabled={!content.trim()}
                type="submit"
            >
                Post
            </button>
        </Form>
    );
}

export default CommentCreateForm;
