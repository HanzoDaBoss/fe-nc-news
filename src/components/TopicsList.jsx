import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getTopics } from "../api";

const TopicsList = () => {
  const [topicsList, setTopicsList] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicsList(topics);
    });
  }, []);
  return topicsList.map((topic, index) => {
    return (
      <Link to={`/topics/${topic.slug}`} key={index}>
        <div className="topic">
          <p>{topic.slug}</p>
        </div>
      </Link>
    );
  });
};

export default TopicsList;
