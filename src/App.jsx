import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import SingleTopic from "./components/SingleTopic";
import Sidebar from "./components/Sidebar";
import LoginModal from "./components/LoginModal";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function App() {
  const [loading, setLoading] = useState(true);
  const [articlesList, setArticlesList] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [toggleLoginModal, setToggleLoginModal] = useState(false);

  const handleToggleLoginModal = () => setToggleLoginModal(!toggleLoginModal);

  return (
    <>
      <Header
        setArticlesList={setArticlesList}
        setShow={setShow}
        setSearch={setSearch}
        handleToggleLoginModal={handleToggleLoginModal}
      ></Header>
      <LoginModal
        toggleLoginModal={toggleLoginModal}
        handleToggleLoginModal={handleToggleLoginModal}
      />
      <Sidebar show={show} setShow={setShow}>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/"
            element={
              <Home
                articlesList={articlesList}
                setArticlesList={setArticlesList}
                loading={loading}
                setLoading={setLoading}
                search={search}
              />
            }
          ></Route>
          <Route
            path="/articles/:article_id"
            element={
              <SingleArticle loading={loading} setLoading={setLoading} />
            }
          ></Route>
          <Route
            path="/topics/:topic_name"
            element={
              <SingleTopic
                articlesList={articlesList}
                setArticlesList={setArticlesList}
                loading={loading}
                setLoading={setLoading}
              />
            }
          ></Route>
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;
