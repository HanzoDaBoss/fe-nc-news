import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<ArticlesList />}></Route>
        <Route
          path="/articles/:article_id"
          element={<SingleArticle loading={loading} setLoading={setLoading} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
