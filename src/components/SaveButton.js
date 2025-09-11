import React, { useState, useEffect } from "react";
import { axiosRes } from "../api/axiosDefaults";
import btnStyles from '../styles/Button.module.css';
import { Button } from "react-bootstrap";

const SaveButton = ({ postId, setShowAlert, setAlertMessage, setAlertVariant }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [saveId, setSaveId] = useState(null);

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
      setAlertMessage("Post saved!");
      setAlertVariant("success");
      setShowAlert(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnsave = async () => {
    try {
      await axiosRes.delete(`/saves/${saveId}/`);
      setIsSaved(false);
      setSaveId(null);
      setAlertMessage("Post unsaved");
      setAlertVariant("warning");
      setShowAlert(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
  );
};

export default SaveButton;
