import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";

const CommentsList = () => {
  const { article_id } = useParams();
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setCommentsList(comments);
    });
  });

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
