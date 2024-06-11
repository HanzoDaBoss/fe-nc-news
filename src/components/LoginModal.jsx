import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const LoginModal = ({ toggleLoginModal, handleToggleLoginModal }) => {
  return (
    <Modal show={toggleLoginModal} onHide={handleToggleLoginModal}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="username" autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleToggleLoginModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleToggleLoginModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
