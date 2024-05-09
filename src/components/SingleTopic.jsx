import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getArticlesByTopic } from "../api";
import ArticlesList from "./ArticlesList";
import ErrorDisplay from "./ErrorDisplay";

const SingleTopic = ({ articlesList, setArticlesList }) => {
  const [error, setError] = useState(null);

  const { topic_name } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic_name)
      .then((articles) => {
        setArticlesList(articles);
      })
      .catch((error) => {
        setError(error.response);
      });
  }, [topic_name]);

  if (error) {
    console.log(error);
    return <ErrorDisplay error={error} />;
  }

  return <ArticlesList articlesList={articlesList} />;
};

export default SingleTopic;
