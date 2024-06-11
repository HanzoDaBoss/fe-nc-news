import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { UserContext } from "./contexts/User";
import { getUsers } from "../api";

const LoginModal = ({ toggleLoginModal, handleToggleLoginModal }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [loginErrorModal, setLoginErrorModal] = useState(false);
  const { setUser } = useContext(UserContext);

  const toggleLoginErrorModal = () => setLoginErrorModal(!loginErrorModal);

  const handleUsernameInput = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    getUsers().then((users) => {
      const usernameList = users.map((user) => user.username);
      if (usernameList.includes(usernameInput)) {
        setUser(usernameInput);
        setUsernameInput("");
        handleToggleLoginModal();
      } else {
        toggleLoginErrorModal();
      }
    });
  };

  return (
    <>
      <Modal show={toggleLoginModal} onHide={handleToggleLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                autoFocus
                onChange={handleUsernameInput}
                value={usernameInput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLoginSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        size="sm"
        show={loginErrorModal}
        onHide={toggleLoginErrorModal}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>User not found!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleLoginErrorModal}>
            Dismiss
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
