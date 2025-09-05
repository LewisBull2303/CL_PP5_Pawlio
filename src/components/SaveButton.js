import React, { useState } from "react";
import { axiosRes } from "../api/axiosDefaults";

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
      {isSaved ? "💾 Saved" : "💾 Save"}
    </span>
  );
};

export default SaveButton;
