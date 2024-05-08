import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import SingleTopic from "./components/SingleTopic";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("tickle122");
  const [articlesList, setArticlesList] = useState([]);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              articlesList={articlesList}
              setArticlesList={setArticlesList}
            />
          }
        ></Route>
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
        <Route
          path="/topics/:topic_name"
          element={
            <SingleTopic
              articlesList={articlesList}
              setArticlesList={setArticlesList}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
