import { useEffect } from "react";

import { getArticles } from "../api";
import ArticlesList from "./ArticlesList";

const Home = ({ articlesList, setArticlesList }) => {
  useEffect(() => {
    getArticles().then((articles) => {
      setArticlesList(articles);
    });
  }, []);

  return <ArticlesList articlesList={articlesList} />;
};

export default Home;
