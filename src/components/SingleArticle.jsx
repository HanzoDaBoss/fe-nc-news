import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticleById } from "../api";
import CommentsList from "./CommentsList";
import Vote from "./Vote";
import AddComment from "./AddComment";
import ErrorDisplay from "./ErrorDisplay";

import Spinner from "react-bootstrap/Spinner";

const SingleArticle = ({ loading, setLoading }) => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);
  const [voteChange, setVoteChange] = useState(0);
  const [commentsList, setCommentsList] = useState([]);
  const [hasNoComments, setHasNoComments] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getArticleById(article_id)
      .then((articleObj) => {
        setArticle(articleObj);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response);
      });
  }, [article_id]);

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  return loading ? (
    <div className="loading">
      <Spinner animation="border" variant="primary" />
    </div>
  ) : (
    <div className="single-article">
      <p>
        {article.author} posted on {article.topic}
      </p>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <img src={article.article_img_url}></img>
      <p>votes: {article.votes + voteChange}</p>
      <p>comments: {article.comment_count}</p>
      <Vote voteChange={voteChange} setVoteChange={setVoteChange} />
      <AddComment
        setCommentsList={setCommentsList}
        setHasNoComments={setHasNoComments}
      />
      <CommentsList
        commentsList={commentsList}
        setCommentsList={setCommentsList}
        hasNoComments={hasNoComments}
        setHasNoComments={setHasNoComments}
      />
    </div>
  );
};

export default SingleArticle;
