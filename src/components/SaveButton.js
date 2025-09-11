import React, { useState, useEffect } from "react";
import { axiosRes } from "../api/axiosDefaults";
import btnStyles from '../styles/Button.module.css';
import { Button } from "react-bootstrap";
import FeedbackMsg from "./FeedbackMsg";

const SaveButton = ({ postId }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [saveId, setSaveId] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Check if the post is already saved when the component mounts
  useEffect(() => {
    const fetchSaveStatus = async () => {
      try {
        const { data } = await axiosRes.get("/saves/");
        const existingSave = data.results.find((save) => save.post === postId);
        if (existingSave) {
          setIsSaved(true);
          setSaveId(existingSave.id);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchSaveStatus();
  }, [postId]);

  const handleSave = async () => {
    try {
      const { data } = await axiosRes.post("/saves/", { post: postId });
      setIsSaved(true);
      setSaveId(data.id);
      setAlertMessage("Post has been saved");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnsave = async () => {
    try {
      await axiosRes.delete(`/saves/${saveId}/`);
      setIsSaved(false);
      setSaveId(null);
      setAlertMessage("Post has been unsaved");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {showAlert && <FeedbackMsg variant="info" message={alertMessage} />}

      <span
        onClick={isSaved ? handleUnsave : handleSave}
        style={{ cursor: "pointer", marginLeft: "10px" }}
      >
        {isSaved ? (
          <Button className={`my-3 ${btnStyles.Button}`}>
            <i className="fa-solid fa-bookmark"></i>
          </Button>
        ) : (
          <Button className={`my-3 ${btnStyles.Button}`}>
            <i className="fa-regular fa-bookmark"></i>
          </Button>
        )}
      </span>
    </>
  );
};

export default SaveButton;
