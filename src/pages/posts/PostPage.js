import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import columnStyles from "../../styles/SmallMenuContainer.module.css";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import commentsImage from "../../assets/comment.png";
import LikeFeedAddPost from "../../components/LikeFeedAddPost";
import PopularProfiles from "../profiles/PopularProfiles";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;

  // Fetch single post
  const fetchPost = async () => {
    try {
      const { data } = await axiosReq.get(`/posts/${id}`);
      setPost({ results: [data] });
    } catch (err) {
      // console.log(err);
    }
  };

  // Fetch comments and sync post.comments_number with API result
  const fetchComments = async () => {
    try {
      const { data } = await axiosReq.get(`/comments/?post=${id}`);
      setComments(data);

      // Use API count if available, otherwise use results length
      const commentsCount = data.count ?? (data.results ? data.results.length : 0);

      setPost((prevPost) => {
        if (!prevPost.results?.length) {
          // If post not loaded yet, keep as-is
          return prevPost;
        }
        return {
          results: [
            {
              ...prevPost.results[0],
              comments_number: commentsCount,
            },
          ],
        };
      });
    } catch (err) {
      // console.log(err);
    }
  };

  // Initial load: fetch post and comments when id changes
  useEffect(() => {
    const handleMount = async () => {
      try {
        // fetch both in parallel for speed
        await Promise.all([fetchPost(), fetchComments()]);
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Container>
      <Row>
        <Col
          className={`${columnStyles.SplitColumns} ${columnStyles.TwoColumns} py-2 p-0 p-lg-2`}
          lg={4}
        >
          <LikeFeedAddPost />

          <Container
            className={`${appStyles.description} ${columnStyles.CollapsedColumn}`}
          >
            <PopularProfiles />
          </Container>
        </Col>
        <Col className="py-1 p-0 p-lg-2" lg={8}>
          <Post {...post.results[0]} setPosts={setPost} postPage />
          <Container className={`${appStyles.description} pb-3 mb-3`}>
            {currentUser ? (
              <CommentCreateForm
                profile_id={currentUser.profile_id}
                profileImage={profile_image}
                post={id}
                setPost={setPost}
                setComments={setComments}
              />
            ) : comments.results.length ? (
              "Comments"
            ) : null}
            {comments.results.length ? (
              <InfiniteScroll
                children={comments.results.map((comment) => (
                  <Comment
                    key={comment.id}
                    {...comment}
                    setPost={setPost}
                    setComments={setComments}
                    fetchComments={fetchComments} // <-- allow comment edits/deletes to refresh comments and sync count
                  />
                ))}
                dataLength={comments.results.length}
                loader={<Asset spinner />}
                hasMore={!!comments.next}
                next={() => fetchMoreData(comments, setComments)}
              />
            ) : currentUser ? (
              <div className="text-center">
                <img
                  src={commentsImage}
                  width={105}
                  height={85}
                  alt="Comments icon when no comments posted"
                />
                <p>Be the first to comment!</p>
              </div>
            ) : (
              <span>No comments</span>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default PostPage;