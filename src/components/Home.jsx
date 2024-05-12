import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getArticles } from "../api";
import ArticlesList from "./ArticlesList";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const Home = ({
  articlesList,
  setArticlesList,
  loading,
  setLoading,
  search,
}) => {
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
    getArticles(sortBy, orderBy)
      .then((articles) => {
        if (search) {
          setSearchParams({
            search: search,
            sort_by: sortBy,
            order: orderBy,
          });
          return articles.filter((article) => {
            return article.title.toLowerCase().includes(search.toLowerCase());
          });
        } else return articles;
      })
      .then((articles) => {
        setArticlesList(articles);
        setLoading(false);
      });
  }, [sortBy, orderBy, search]);

  return loading ? (
    <div className="loading">
      <Spinner animation="border" variant="primary" />
    </div>
  ) : (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Select
            className="w-25 mx-2"
            onChange={handleSortBySelect}
            value={sortBy}
          >
            <option value="">Sort by...</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </Form.Select>
          <Form.Select
            className="w-25"
            onChange={handleOrderBySelect}
            value={orderBy}
          >
            <option value="">Order by...</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Form.Select>
        </Row>
      </Form>
      <ArticlesList articlesList={articlesList} />
    </>
  );
};

export default Home;
