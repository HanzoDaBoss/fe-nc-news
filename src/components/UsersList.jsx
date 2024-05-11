import { useEffect, useState, useContext } from "react";
import { getUsers } from "../api";
import { UserContext } from "./contexts/User";

import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((users) => {
      setUsersList(users);
    });
  }, []);

  const handleUserSelect = (user) => {
    setUser(user.username);
  };

  return (
    <Accordion.Item eventKey={"0"}>
      <Accordion.Header>Users</Accordion.Header>
      <Accordion.Body>
        <ListGroup>
          {usersList.map((user, index) => {
            return (
              <div key={index}>
                <ListGroup.Item
                  action
                  as="button"
                  onClick={() => {
                    handleUserSelect(user);
                  }}
                >
                  {user.username}
                </ListGroup.Item>
              </div>
            );
          })}
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UsersList;
