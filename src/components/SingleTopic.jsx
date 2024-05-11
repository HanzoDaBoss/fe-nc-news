import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getArticlesByTopic } from "../api";
import ArticlesList from "./ArticlesList";
import ErrorDisplay from "./ErrorDisplay";

import Spinner from "react-bootstrap/Spinner";

const SingleTopic = ({
  articlesList,
  setArticlesList,
  loading,
  setLoading,
}) => {
  const [error, setError] = useState(null);

  const { topic_name } = useParams();

  useEffect(() => {
    setLoading(true);
    getArticlesByTopic(topic_name)
      .then((articles) => {
        setArticlesList(articles);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        setError(error.response);
      });
  }, [topic_name]);

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  return loading ? (
    <Spinner animation="border" variant="primary" />
  ) : (
    <ArticlesList articlesList={articlesList} />
  );
};

export default SingleTopic;
