import { useState } from "react";
import { useParams } from "react-router-dom";

import { postComment } from "../api";

const AddComment = ({ user, setCommentsList }) => {
  const [commentText, setCommentText] = useState("");
  const [hasPosted, setHasPosted] = useState(false);

  const { article_id } = useParams();

  const handleCommentText = (e) => {
    setCommentText(e.target.value);
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!commentText) {
      alert("Comment cannot be empty");
    } else {
      setHasPosted(true);
      setCommentsList((currCommentsList) => {
        return [
          {
            author: user,
            body: commentText,
            votes: 0,
            comment_id: currCommentsList.length,
          },
          ...currCommentsList,
        ];
      });
      postComment(article_id, { username: user, body: commentText }).catch(
        (error) => {
          alert("Apologies - comment did not process");
        }
      );
      setCommentText("");
    }
  };

  return (
    <form onSubmit={handlePostComment}>
      <textarea
        placeholder="Add a comment..."
        value={commentText}
        onChange={handleCommentText}
      ></textarea>
      <button disabled={hasPosted}>Post</button>
    </form>
  );
};

export default AddComment;
