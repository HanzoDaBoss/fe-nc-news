import { useEffect, useState } from "react";
import { getUsers } from "../api";
import { useContext } from "react";
import { UserContext } from "./contexts/User";

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

  return usersList.map((user, index) => {
    return (
      <button
        onClick={() => {
          handleUserSelect(user);
        }}
        key={index}
      >
        <div className="user">
          <p>{user.username}</p>
        </div>
      </button>
    );
  });
};

export default UsersList;
