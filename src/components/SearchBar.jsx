import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getArticles } from "../api";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const SearchBar = ({ setSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    navigate(`/`);
  };

  return (
    <Form onSubmit={handleSearch} className="d-flex flex-grow-1 w-25">
      <Form.Control
        type="search"
        placeholder="Search NC-News"
        className="me-2"
        aria-label="Search"
        onChange={handleSearchInput}
        value={searchInput}
      />
      <Button
        type="submit"
        variant="outline-primary"
        className="me-2 d-none d-lg-block"
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
