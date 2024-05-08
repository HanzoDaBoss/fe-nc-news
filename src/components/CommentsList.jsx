import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getComments } from "../api";
import DeleteComment from "./DeleteComment";

const CommentsList = ({ commentsList, setCommentsList, user }) => {
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setCommentsList(comments);
    });
  }, []);

  return (
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
