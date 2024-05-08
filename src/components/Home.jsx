import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getArticles, getArticlesBySort } from "../api";
import ArticlesList from "./ArticlesList";

const Home = ({ articlesList, setArticlesList }) => {
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("&order=asc");

  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("sort_by");
  searchParams.get("order");

  const handleSortBySelect = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderBySelect = (e) => {
    setOrderBy(e.target.value);
  };

  useEffect(() => {
    if (sortBy) {
      setSearchParams({
        sort_by: sortBy,
        order: orderBy.slice(7, orderBy.length),
      });
      getArticlesBySort(sortBy, orderBy).then((articles) => {
        setArticlesList(articles);
      });
    } else {
      getArticles().then((articles) => {
        setSearchParams({});
        setArticlesList(articles);
      });
    }
  }, [sortBy, orderBy]);

  return (
    <>
      <form>
        <select onChange={handleSortBySelect} value={sortBy}>
          <option value="">Select...</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <select onChange={handleOrderBySelect} value={orderBy}>
          <option value="&order=asc">Ascending</option>
          <option value="&order=desc">Descending</option>
        </select>
      </form>
      <ArticlesList articlesList={articlesList} />
    </>
  );
};

export default Home;
