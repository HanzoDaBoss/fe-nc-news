import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { getArticlesByTopic } from "../api";
import ArticlesList from "./ArticlesList";

const SingleTopic = ({ articlesList, setArticlesList }) => {
  const { topic_name } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic_name).then((articles) => {
      setArticlesList(articles);
    });
  }, [topic_name]);

  return <ArticlesList articlesList={articlesList} />;
};

export default SingleTopic;
