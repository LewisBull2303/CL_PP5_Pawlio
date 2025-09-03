// components/SaveButton.js
import React, { useState } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { axiosReq } from '../api/axiosDefaults';
import styles from '../styles/SaveButton.module.css';

const SaveButton = ({ postId, isInitiallySaved }) => {
  const [isSaved, setIsSaved] = useState(isInitiallySaved);
  const [error, setError] = useState(null);

  const handleSave = async () => {
    try {
      await axiosReq.post('/saves/', { post: postId });
      setIsSaved(true);
    } catch (err) {
      setError('Could not save post');
    }
  };

  return (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>{isSaved ? <i class="fa-solid fa-bookmark"></i> : <i class="fa-solid fa-bookmark"></i>}</Tooltip>}
      >
        <Button
          className={styles.SaveButton}
          onClick={handleSave}
          disabled={isSaved}
          variant={isSaved ? 'success' : 'outline-primary'}
        >
          {isSaved ? <i class="fa-solid fa-bookmark"></i> : <i class="fa-solid fa-bookmark"></i>}
        </Button>
      </OverlayTrigger>
      {error && <div className="text-danger mt-2">{error}</div>}
    </>
  );
};

export default SaveButton;
