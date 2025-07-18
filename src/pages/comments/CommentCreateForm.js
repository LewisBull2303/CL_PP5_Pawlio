import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from '../../styles/CommentCreateEditForm.module.css';
import Avatar from '../../components/Avatar';
import { axiosRes } from '../../api/axiosDefaults';

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState('');

  /* 
    Handles changes to the create comment input field
  */
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  /* 
    Handles the submission of the comment create input field
    Increments the number of comments by 1
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
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
            comments_number: prevPost.results[0].comments_number + 1,
          },
        ],
      }));
      setContent('');
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form className="mt-2 text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <p className="my-2">
            <Link to={`/profiles/${profile_id}`}>
              <img
                src={profileImage}
                width={55}
                height={55}
                alt="avatar"
                style={{ borderRadius: '50%' }}
              />
            </Link>
          </p>
          <Form.Control
            className={styles.Form}
            placeholder="share what you think..."
            aria-label="comment input box"
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>

      <Button
        className={styles.CommentsButton}
        onMouseDown={(e) => e.preventDefault()}
        type="submit"
      >
        Add
      </Button>
      <hr className={styles.Line} />
    </Form>
  );
}

export default CommentCreateForm;
