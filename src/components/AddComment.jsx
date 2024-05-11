import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { postComment } from "../api";
import { UserContext } from "./contexts/User";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";

const AddComment = ({ setCommentsList, setHasNoComments }) => {
  const [commentText, setCommentText] = useState("");
  const [hasPosted, setHasPosted] = useState(false);

  const { user } = useContext(UserContext);

  const { article_id } = useParams();

  const handleCommentText = (e) => {
    setCommentText(e.target.value);
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!commentText) {
      alert("Comment cannot be empty");
    } else if (!user) {
      alert("Please login");
    } else {
      setHasPosted(true);
      setHasNoComments(false);
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
      postComment(article_id, { username: user, body: commentText })
        .then(() => {
          setHasPosted(false);
        })
        .catch((error) => {
          alert("Apologies - comment did not process");
        });
      setCommentText("");
    }
  };

  return (
    <Form onSubmit={handlePostComment}>
      <Form.Control
        as="textarea"
        className="my-2"
        placeholder="Add a comment..."
        value={commentText}
        onChange={handleCommentText}
      ></Form.Control>
      <Button
        type="submit"
        className="mb-4"
        variant="outline-dark"
        disabled={hasPosted}
      >
        Post
      </Button>
    </Form>
  );
};

export default AddComment;
