import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Form, Alert } from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import styles from '../../styles/CommentCreateEditForm.module.css';
import Avatar from '../../components/Avatar';
import { axiosRes } from '../../api/axiosDefaults';
import appStyles from '../../App.module.css';

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post('/comments/', {
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
      setContent('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <img
              src={profileImage}
              width={55}
              height={55}
              alt="avatar"
              style={{ borderRadius: '50%' }}
            />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
          {errors.category?.map((message, idx) => (
            <Alert variant="warning" className={appStyles.Alert} key={idx}>
              {message}
            </Alert>
          ))}
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
