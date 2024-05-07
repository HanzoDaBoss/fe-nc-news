import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getArticleById } from "../api";
import ErrorPage from "./ErrorPage";

const SingleArticle = ({ loading, setLoading }) => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  const [error, setError] = useState(null);

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
      <p>votes: {article.votes}</p>
      <p>comments: {article.comment_count}</p>
    </div>
  );
};

export default SingleArticle;
