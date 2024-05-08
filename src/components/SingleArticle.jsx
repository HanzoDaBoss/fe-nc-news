import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { getArticleById } from "../api";

import ErrorPage from "./ErrorPage";
import CommentsList from "./CommentsList";
import Vote from "./Vote";
import AddComment from "./AddComment";

const SingleArticle = ({ loading, setLoading, user }) => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);
  const [voteChange, setVoteChange] = useState(0);
  const [commentsList, setCommentsList] = useState([]);

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
    console.log(error);
    return <ErrorPage error={error} />;
  }

  return loading ? (
    <h2>Loading...</h2>
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
      <AddComment user={user} setCommentsList={setCommentsList} />
      <CommentsList
        commentsList={commentsList}
        setCommentsList={setCommentsList}
        user={user}
      />
    </div>
  );
};

export default SingleArticle;
