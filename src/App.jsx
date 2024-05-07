import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ArticlesList />}></Route>
      </Routes>
    </>
  );
}

export default App;
