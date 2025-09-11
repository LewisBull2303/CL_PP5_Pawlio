import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";

function CommentEditForm(props) {
  const { id, description, setShowEditForm, setComments, setShowAlert } = props;
  const [formdescription, setFormdescription] = useState(description);

  /* 
    Handles changes to form input
  */
  const handleChange = (e) => {
    setFormdescription(e.target.value);
  };

  /* 
    Handles the edit comment form submission
    Updates displayed comment with date set to 'now'
    Displays confirmation alert to the user 
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        description: formdescription.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                description: formdescription.trim(),
                updated_on: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
      setShowAlert(true);
    } catch (err) {
      //console.log(err)
    }
  };

  return (
    <Form className="mt-2 text-center" onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formdescription}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>

      <div className="text-right">
        <Button
          className={styles.CommentsButton}
          disabled={!description.trim()}
          onMouseDown={(e) => e.preventDefault()}
          type="submit"
        >
          Update
        </Button>
        <Button
          className={styles.CommentsButton}
          onClick={() => {
            setShowEditForm(false);
            setShowAlert(false);
          }}
          onMouseDown={(e) => e.preventDefault()}
          type="button"
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
}

export default CommentEditForm;