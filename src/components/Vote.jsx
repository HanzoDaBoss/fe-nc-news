import { useParams } from "react-router-dom";
import { patchVote } from "../api";

import Button from "react-bootstrap/esm/Button";

const Vote = ({ voteChange, setVoteChange }) => {
  const { article_id } = useParams();

  const handleVote = (vote) => {
    setVoteChange((currVote) => {
      return (currVote += vote);
    });
    patchVote(article_id, vote).catch((error) => {
      setVoteChange((currVote) => {
        return (currVote -= vote);
      });
      alert("Apologies - vote did not process");
    });
  };

  return (
    <div className="my-4">
      <Button
        variant="outline-success"
        className="mx-2"
        disabled={voteChange === 1}
        onClick={() => handleVote(1)}
      >
        Vote Up
      </Button>
      <Button
        variant="outline-danger"
        className="mx-2"
        disabled={voteChange === -1}
        onClick={() => handleVote(-1)}
      >
        Vote Down
      </Button>
    </div>
  );
};

export default Vote;
