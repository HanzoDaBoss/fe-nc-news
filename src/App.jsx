import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
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
