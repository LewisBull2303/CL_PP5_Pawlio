import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PasswordCriteria from '../../components/PasswordCriteria';

import styles from '../../styles/SignInUpForm.module.css';
import btnStyles from '../../styles/Button.module.css';
import appStyles from '../../App.module.css';

import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Container,
  Alert,
} from 'react-bootstrap';
import axios from 'axios';
import { useRedirect } from '../../hooks/useRedirect';

const SignUpForm = () => {
  useRedirect('loggedIn');
  const [signUpData, setSignUpData] = useState({
    username: '',
    password1: '',
    password2: '',
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/dj-rest-auth/registration/', signUpData);
      history.push('/login');
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className="text-center">
      <Col className="my-auto offset-md-2" md={8}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className="mb-4">Sign up</h1>

          {/* Sign up form with alert messages for any errors in input fields */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={`${appStyles.Input} text-center`}
                type="text"
                placeholder="Your username"
                name="username"
                label="Username"
                maxLength={20}
                value={username}
                onChange={handleChange}
              />
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" className={appStyles.Alert} key={idx}>
                  {message}
                </Alert>
              ))}
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={`${appStyles.Input} text-center`}
                type="password"
                placeholder="Password"
                label="Password1"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
              {errors.password1?.map((message, idx) => (
                <Alert variant="warning" className={appStyles.Alert} key={idx}>
                  {message}
                </Alert>
              ))}
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={`${appStyles.Input} text-center`}
                type="password"
                placeholder="Confirm password"
                name="password2"
                label="Password2"
                value={password2}
                onChange={handleChange}
              />
              {errors.password2?.map((message, idx) => (
                <Alert variant="warning" className={appStyles.Alert} key={idx}>
                  {message}
                </Alert>
              ))}
            </Form.Group>

            {errors.non_field_errors?.map((message, idx) => (
              <Alert variant="warning" className={appStyles.Alert} key={idx}>
                {message}
              </Alert>
            ))}

            <PasswordCriteria />

            <Button
              className={`my-3 ${btnStyles.Button}`}
              type="submit"
              onMouseDown={(e) => e.preventDefault()}
            >
              Sign up!
            </Button>

            <Link className={styles.Link} to="/login">
              Already a member? Click <span>here </span>to log in.
            </Link>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
