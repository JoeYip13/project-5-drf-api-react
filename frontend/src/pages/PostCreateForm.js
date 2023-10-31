import React, { useState } from "react";

// Bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../assets/upload_96x96.png";

import styles from "../styles/PostCreateEditForm.module.css";
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";
import Asset from "../components/Asset";

function PostCreateForm() {
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title: "",
        content: "",
        image: "",
        model: "",
        year: "",
        bhp: "",
        location: "",
        is_modifled: false,
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

    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={() => {}}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="content"
                    value={content}
                    onChange={() => {}}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Model</Form.Label>
                <Form.Control
                    type="text"
                    name="model"
                    value={model}
                    onChange={() => {}}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Year</Form.Label>
                <Form.Control
                    type="text"
                    name="year"
                    value={year}
                    onChange={() => {}}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>BHP</Form.Label>
                <Form.Control
                    type="text"
                    name="bhp"
                    value={bhp}
                    onChange={() => {}}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    name="location"
                    value={location}
                    onChange={() => {}}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Is Modified</Form.Label>
                <Form.Check
                    type="checkbox"
                    label="Yes"
                    name="is_modified"
                    value={is_modified}
                />
                <Form.Check
                    type="checkbox"
                    label="No"
                    name="is_modified"
                    value={is_modified}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Colour</Form.Label>
                <Form.Control
                    type="text"
                    name="colour"
                    value={colour}
                    onChange={() => {}}
                />
            </Form.Group>

            <Button
                className={`${btnStyles.Button} ${btnStyles.Bright}`}
                onClick={() => {}}
            >
                cancel
            </Button>
            <Button
                className={`${btnStyles.Button} ${btnStyles.Bright}`}
                type="submit"
            >
                create
            </Button>
        </div>
    );

    return (
        <Form>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            <Form.Label
                                className="d-flex justify-content-center"
                                htmlFor="image-upload"
                            >
                                <Asset
                                    src={Upload}
                                    message="Click or tap to upload an image"
                                />
                            </Form.Label>
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
