import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getComments } from "../api";

const CommentsList = ({ commentsList, setCommentsList }) => {
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setCommentsList(comments);
    });
  }, []);

  return (
    <>
      {commentsList.map((comment) => {
        return (
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
