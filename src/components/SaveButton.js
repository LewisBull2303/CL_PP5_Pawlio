import React, { useState } from "react";
import { axiosRes } from "../api/axiosDefaults";
import btnStyles from '../styles/Button.module.css';
import { Button } from "react-bootstrap";

const SaveButton = ({ postId, isInitiallySaved }) => {
  const [isSaved, setIsSaved] = useState(isInitiallySaved);
  const [saveId, setSaveId] = useState(null);

  const handleSave = async () => {
    try {
      const { data } = await axiosRes.post("/saves/", { post: postId });
      setIsSaved(true);
      setSaveId(data.id);
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnsave = async () => {
    try {
      await axiosRes.delete(`/saves/${saveId}/`);
      setIsSaved(false);
      setSaveId(null);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <span
      onClick={isSaved ? handleUnsave : handleSave}
      style={{ cursor: "pointer", marginLeft: "10px" }}
    >
      {isSaved ? <Button className={`my-3 ${btnStyles.Button}`}><i class="fa-solid fa-bookmark"></i></Button> : <Button className={`my-3 ${btnStyles.Button}`}><i class="fa-solid fa-bookmark"></i></Button>}
    </span>
  );
};

export default SaveButton;