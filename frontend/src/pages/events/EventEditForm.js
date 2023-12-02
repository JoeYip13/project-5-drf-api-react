import React, { useRef, useState, useEffect } from "react";

// Bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function EventEditForm() {
    const [errors, setErrors] = useState({});
    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        event_date: "",
        event_time: "",
        location: "",
        image: "",
    });

    const {
        title,
        description,
        image,
        location,
        event_date,
        event_time,
    } = eventData;

    const imageInput = useRef(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosRes.get(`events/${id}/`);
                const {
                    title,
                    description,
                    event_date,
                    event_time,
                    location,
                    image,
                    is_owner,
                } = data;

                is_owner
                    ? setEventData({
                          title,
                          description,
                          event_date,
                          event_time,
                          location,
                          image,
                      })
                    : history.push("events/");
            } catch (error) {
                // console.log(error);
            }
        };

        handleMount();
    }, [history, id]);

    const handleChange = (event) => {
        setEventData({
            ...eventData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setEventData({
                ...eventData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Client-side validation requiredFields array containing the names of fields that are required.
        const requiredFields = [
            "title",
            "description",
            "event_date",
            "event_time",
            "image",
            "location",
        ];
        // I filtered out the fields that are missing from the postData.
        const missingFields = requiredFields.filter(
            (field) => !eventData[field]
        );
        // If there are missing fields, I set an error message for each missing field in the setErrors function, and the function returns early to prevent the API call.
        if (missingFields.length > 0) {
            const errorMessages = missingFields.map(
                (field) =>
                    `${
                        field.charAt(0).toUpperCase() + field.slice(1)
                    } is required.`
            );
            // I added a general error message in case there are missing fields, and I updated the setErrors function to handle this general error message:
            setErrors({ general: errorMessages });
            return;
        }
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);

        if (imageInput?.current?.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }

        formData.append("event_date", event_date);
        formData.append("event_time", event_time);
        formData.append("location", location);
        // console.log(Object.fromEntries(formData.entries()));

        try {
            await axiosReq.put(`/events/${id}/`, formData);
            history.push(`/events/${id}`);
        } catch (error) {
            // console.log(error);
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
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="description"
                    value={description}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>Event Date</Form.Label>
                <Form.Control
                    type="text"
                    name="event_date"
                    value={event_date}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.event_date?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>Time</Form.Label>
                <Form.Control
                    type="text"
                    name="event_time"
                    value={event_time}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.event_time?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.location?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            {/* Now, you should see a general error message if the user tries to submit the form without filling in all the required fields. */}
            {errors?.general?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                onClick={() => history.goBack()}
            >
                Cancel
            </Button>
            <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                type="submit"
            >
                Save
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
                            <figure>
                                <Image
                                    className={appStyles.Image}
                                    src={image}
                                    rounded
                                />
                            </figure>
                            <div>
                                <Form.Label
                                    className={`${btnStyles.Button} ${btnStyles.Black} btn`}
                                    htmlFor="image-upload"
                                >
                                    Change the image
                                </Form.Label>
                            </div>

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

export default EventEditForm;
