import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { getComments } from "../api";
import DeleteComment from "./DeleteComment";
import { UserContext } from "./contexts/User";

const CommentsList = ({
  commentsList,
  setCommentsList,
  hasNoComments,
  setHasNoComments,
}) => {
  const [loadingComments, setLoadingComments] = useState(false);

  const { user } = useContext(UserContext);

  const { article_id } = useParams();

  useEffect(() => {
    setLoadingComments(true);
    getComments(article_id)
      .then((comments) => {
        setCommentsList(comments);
        setLoadingComments(false);
      })
      .catch((error) => {
        setLoadingComments(false);
        setHasNoComments(true);
      });
  }, []);

  if (hasNoComments) {
    return <h2>Be the first to comment!</h2>;
  }

  return loadingComments ? (
    <h2>Loading comments...</h2>
  ) : (
    <>
      {commentsList.map((comment) => {
        return Object.keys(comment).includes("deleteMessage") ? (
          <div className="comment-card" key={comment.comment_id}>
            <p>{comment.deleteMessage}</p>
          </div>
        ) : user === comment.author &&
          Object.keys(comment).includes("article_id") ? (
          <div className="comment-card" key={comment.comment_id}>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p>votes: {comment.votes}</p>
            <DeleteComment
              setCommentsList={setCommentsList}
              comment_id={comment.comment_id}
            />
          </div>
        ) : (
          <div className="comment-card" key={comment.comment_id}>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p>votes: {comment.votes}</p>
          </div>
        );
      })}
    </>
  );
};

export default CommentsList;
