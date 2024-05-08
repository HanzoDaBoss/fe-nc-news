import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("tickle122");

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<ArticlesList />}></Route>
        <Route
          path="/articles/:article_id"
          element={
            <SingleArticle
              loading={loading}
              setLoading={setLoading}
              user={user}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
