import React, { useRef, useState } from 'react';
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
} from 'react-bootstrap';
import Upload from '../../assets/upload.png';
import styles from '../../styles/PostCreateEditForm.module.css';
import appStyles from '../../App.module.css';
import Asset from '../../components/Asset';
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
  });

  const { title, category, description, image } = postData;
  const imageInput = useRef(null);
  const history = useHistory();

  /* 
    Handles changes to the create form input fields
  */
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  /* 
    Handles change to the file (image) input field
  */
  const handleChangeImage = (e) => {
    if (e.target.files.length) {
      URL.revokeObjectURL(image); // for changing image after adding one
      setPostData({
        ...postData,
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  /* 
    Handles the create post form submission
    Refreshes the user's access token before making a request to create a post
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('category', category);
    formData.append('content', content);
    formData.append('image', imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post('/posts/', formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  /*
    Hold input fields and buttons to create and cancel
  */
  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>

        {errors.title?.map((message, idx) => (
          <Alert variant="warning" className={appStyles.Alert} key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Control
          type="text"
          name="title"
          className={appStyles.Input}
          value={title}
          onChange={handleChange}
          aria-label="title"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Category</Form.Label>

        {errors.category?.map((message, idx) => (
          <Alert variant="warning" className={appStyles.Alert} key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Control
          as="select"
          name="category"
          className={appStyles.Input}
          value={category}
          onChange={handleChange}
          aria-label="category"
        >
          <option value="">Select a category</option>
          <option value="Puppy">Puppy</option>
          <option value="Senior Dog">Senior Dog</option>
          <option value="Nature">Nature</option>
          <option value="Family">Family</option>
          <option value="Big Dog">Big Dog</option>
          <option value="Small Dog">Small Dog</option>
          <option value="Funny">Funny</option>
          <option value="Sleeping">Sleeping</option>
          <option value="Playing">Playing</option>
          <option value="Zoomies">Zoomies</option>
          <option value="Camping">Camping</option>
          <option value="Kids & Dogs">Kids & Dogs</option>
          <option value="Cute">Cute</option>
          <option value="Silly">Silly</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          className={appStyles.Input}
          value={content}
          onChange={handleChange}
          aria-label="post description"
        />
      </Form.Group>

      <Button
        className={`my-3 ${appStyles.button}`}
        onMouseDown={(e) => e.preventDefault()}
        type="submit"
      >
        Create
      </Button>

      <Button
        className={`${appStyles.button} mx-3`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={7} lg={8} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        <Col className="pt-2 pb-4 p-0 p-md-2" md={5} lg={4}>
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
                      alt="your uploaded image"
                      rounded
                    />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${appStyles.button} ${styles.ButtonChangeImage} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className={`${styles.UploadPicture} d-flex justify-content-center`}
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload a picture"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                className="d-none"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>

            {errors.image?.map((message, idx) => (
              <Alert variant="warning" className={appStyles.Alert} key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
