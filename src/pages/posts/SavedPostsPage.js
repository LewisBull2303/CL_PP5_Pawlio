import React, { useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import Post from "./Post";

const SavedPostsPage = () => {
  const [savedPosts, setSavedPosts] = useState({ results: [] });

  useEffect(() => {
    const fetchSavedPosts = async () => {
      try {
        const { data } = await axiosReq.get("/my-saves/");
        setSavedPosts({ results: data });
      } catch (err) {
        // console.log(err);
      }
    };
    fetchSavedPosts();
  }, []);

  return (
    <div>
      <h2>My Saved Posts</h2>
      {savedPosts.results.length ? (
        savedPosts.results.map((save) => (
          <Post key={save.post} {...save.post} />
        ))
      ) : (
        <p>You haven’t saved any posts yet.</p>
      )}
    </div>
  );
};

export default SavedPostsPage;
