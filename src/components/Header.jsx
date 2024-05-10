import { useContext } from "react";
import { Link } from "react-router-dom";

import TopicsList from "./TopicsList";
import UsersList from "./UsersList";
import { UserContext } from "./contexts/User";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Link to="/" reloadDocument>
        <h1>NC-NEWS</h1>
      </Link>
      <TopicsList />
      <UsersList />
      <p>{user ? `Welcome, ${user}` : <button>Login</button>}</p>
    </>
  );
};

export default Header;
