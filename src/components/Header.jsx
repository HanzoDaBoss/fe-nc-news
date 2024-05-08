import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getTopics } from "../api";

const Header = () => {
  const [topicsList, setTopicsList] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopicsList(topics);
    });
  }, []);

  return (
    <>
      <Link to="/" reloadDocument>
        <h1>NC-NEWS</h1>
      </Link>
      {topicsList.map((topic, index) => {
        return (
          <Link to={`/topics/${topic.slug}`} key={index}>
            <div className="topic">
              <p>{topic.slug}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Header;
