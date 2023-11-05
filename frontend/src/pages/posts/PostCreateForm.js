import React, { useRef, useState } from "react";

// Bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import Upload from "../../assets/upload_96x96.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});

    const [isChecked, setIsChecked] = useState(false);
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        image: "",
        model: "",
        year: "",
        bhp: "",
        location: "",
        is_modified: isChecked,
        colour: "",
    });

    const {
        title,
        content,
        image,
        model,
        year,
        bhp,
        location,
        is_modified,
        colour,
    } = postData;

    const imageInput = useRef(null);
    const history = useHistory();

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
            [event.target.name === is_modified]: (event.target.value =
                setIsChecked(!isChecked)),
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", imageInput.current.files[0]);
        formData.append("model", model);
        formData.append("year", year);
        formData.append("bhp", bhp);
        formData.append("location", location);
        formData.append("is_modified", is_modified);
        formData.append("colour", colour);
        console.log(Object.fromEntries(formData.entries()));

        try {
            const { data } = await axiosReq.post("/posts/", formData);
            history.push(`/posts/${data.id}`);
        } catch (error) {
            console.log(error);
            if (error.response?.status !== 401) {
                setErrors(error.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="content"
                    value={content}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Model</Form.Label>
                <Form.Control
                    type="text"
                    name="model"
                    value={model}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Year</Form.Label>
                <Form.Control
                    type="text"
                    name="year"
                    value={year}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>BHP</Form.Label>
                <Form.Control
                    type="text"
                    name="bhp"
                    value={bhp}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Is Modified</Form.Label>
                <Form.Check
                    type="checkbox"
                    label="Yes"
                    name="is_modified"
                    value={!isChecked}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Colour</Form.Label>
                <Form.Control
                    type="text"
                    name="colour"
                    value={colour}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button
                className={`${btnStyles.Button} ${btnStyles.Bright}`}
                onClick={() => history.goBack()}
            >
                Cancel
            </Button>
            <Button
                className={`${btnStyles.Button} ${btnStyles.Bright}`}
                type="submit"
            >
                Create
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            {image ? (
                                <>
                                    <figure>
                                        <Image
                                            className={appStyles.Image}
                                            src={image}
                                            rounded
                                        />
                                    </figure>
                                    <div>
                                        <Form.Label
                                            className={`${btnStyles.Button} ${btnStyles.Bright} btn`}
                                            htmlFor="image-upload"
                                        >
                                            Change the image
                                        </Form.Label>
                                    </div>
                                </>
                            ) : (
                                <Form.Label
                                    className="d-flex justify-content-center"
                                    htmlFor="image-upload"
                                >
                                    <Asset
                                        src={Upload}
                                        message="Click or tap to upload an image"
                                    />
                                </Form.Label>
                            )}

                            <Form.File
                                className="d-none"
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                            />
                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>
                        {textFields}
                    </Container>
                </Col>
            </Row>
        </Form>
    );
}

export default PostCreateForm;
