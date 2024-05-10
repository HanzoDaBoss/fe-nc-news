import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getArticles } from "../api";
import ArticlesList from "./ArticlesList";

const Home = ({ articlesList, setArticlesList, loading, setLoading }) => {
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("sort_by");
  searchParams.get("order");

  const handleSortBySelect = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };

  const handleOrderBySelect = (e) => {
    e.preventDefault();
    setOrderBy(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    setSearchParams({});
    if (sortBy) {
      setSearchParams({
        sort_by: sortBy,
      });
    }
    if (orderBy) {
      setSearchParams(() => {
        return sortBy
          ? { sort_by: sortBy, order: orderBy }
          : { order: orderBy };
      });
    }
    getArticles(sortBy, orderBy).then((articles) => {
      setArticlesList(articles);
      setLoading(false);
    });
  }, [sortBy, orderBy]);

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <form>
        <select onChange={handleSortBySelect} value={sortBy}>
          <option value="">Sort by...</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <select onChange={handleOrderBySelect} value={orderBy}>
          <option value="">Order by...</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </form>
      <ArticlesList articlesList={articlesList} />
    </>
  );
};

export default Home;
