import { deleteComment } from "../api";

const DeleteComment = ({ setCommentsList, comment_id }) => {
  const handleDelete = () => {
    setCommentsList((currCommentsList) => {
      return currCommentsList.map((comment) => {
        if (comment.comment_id === comment_id) {
          comment.deleteMessage = "This comment has been deleted";
        }
        return comment;
      });
    });

    deleteComment(comment_id).catch((error) => {
      alert("Apologies - comment was not deleted");
    });
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteComment;
