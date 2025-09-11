import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [description, setdescription] = useState("");

  /* 
    Handles changes to the create comment input field
  */
  const handleChange = (e) => {
    setdescription(e.target.value);
  };

  /* 
    Handles the submission of the comment create input field
    Increments the number of comments by 1
  */
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axiosRes.post("/comments/", {
      description,
      post,
    });

    // Update comments immediately
    setComments((prevComments) => ({
      ...prevComments,
      results: [data, ...prevComments.results],
    }));

    // Update post comment count safely
    setPost((prevPost) => ({
  results: [
    {
      ...prevPost.results[0],
      comments_count: prevPost.results[0].comments_count + 1,
    },
  ],
}));

    setdescription("");
  } catch (err) {
    console.error(err);
  }
};

  return (
    <Form className="mt-2 text-center" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <p className="my-2">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profileImage} />
            </Link>
          </p>
          <Form.Control
            className={styles.Form}
            placeholder="share what you think..."
            aria-label="comment input box"
            as="textarea"
            value={description}
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