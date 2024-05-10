import { useParams } from "react-router-dom";
import { patchVote } from "../api";

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
    <>
      <button disabled={voteChange === 1} onClick={() => handleVote(1)}>
        Vote Up
      </button>
      <button disabled={voteChange === -1} onClick={() => handleVote(-1)}>
        Vote Down
      </button>
    </>
  );
};

export default Vote;
