import TopicsList from "./TopicsList";
import UsersList from "./UsersList";

import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Sidebar = ({ children, show, setShow }) => {
  const handleClose = () => setShow(false);
  const expand = "lg";

  return (
    <div className="container-fluid w-100">
      <div className="vh-100 w-100">
        <div
          className="row col-3 px-0 bg-light position-fixed d-none d-lg-block w-25 border border-primary"
          id="sticky-sidebar"
        >
          <div className="nav flex-column align-items-center flex-nowrap vh-100 overflow-auto text-white py-5">
            <Navbar
              key={expand}
              expand={expand}
              className="bg-body-tertiary mb-3"
              onSelect={handleClose}
            >
              <Container fluid>
                <Navbar.Offcanvas
                  id="sidebar"
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                  show={show}
                  onHide={handleClose}
                  responsive="lg"
                  className="w-auto py-4 m-0"
                >
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 flex-column m-0">
                      <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
                        <UsersList />
                        <TopicsList />
                      </Accordion>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div>
        </div>
        <div className="main-content" id="main">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
