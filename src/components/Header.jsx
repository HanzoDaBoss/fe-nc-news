import { useContext } from "react";

import TopicsList from "./TopicsList";
import UsersList from "./UsersList";
import { UserContext } from "./contexts/User";
import logo from "../assets/logo.svg";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const Header = ({ setShow }) => {
  const { user } = useContext(UserContext);

  const handleShow = () => setShow(true);
  const expand = "lg";
  return (
    <>
      <Navbar
        expand={expand}
        className="bg-body-tertiary border-bottom border-primary"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Toggle
            as="button"
            className="btn btn-primary d-lg-none me-2"
            type="button"
            onClick={handleShow}
          ></Navbar.Toggle>
          <Navbar.Brand href="/">
            <img src={logo} className="logo react" alt="Northcoders logo" />
          </Navbar.Brand>
          <Navbar.Brand href="/" className="d-none d-lg-block">
            NC-NEWS
          </Navbar.Brand>
          <Form className="d-flex flex-grow-1 w-25">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-primary"
              className="me-2 d-none d-lg-block"
            >
              Search
            </Button>
          </Form>
          <Button variant="outline-danger" className="me-2">
            Post
          </Button>
          <Navbar.Brand className="d-none d-lg-block">
            {user ? (
              `Welcome, ${user}`
            ) : (
              <Button variant="outline-info" className="me-2">
                Login
              </Button>
            )}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
