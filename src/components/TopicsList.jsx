import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getTopics } from "../api";

import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

const TopicsList = () => {
  const [topicsList, setTopicsList] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicsList(topics);
    });
  }, []);
  return (
    <Accordion.Item eventKey={"1"}>
      <Accordion.Header>Topics</Accordion.Header>
      <Accordion.Body>
        <ListGroup>
          {topicsList.map((topic, index) => {
            return (
              <div key={index}>
                <Link to={`/topics/${topic.slug}`}>
                  <ListGroup.Item action>{topic.slug}</ListGroup.Item>
                </Link>
              </div>
            );
          })}
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>

    //   topicsList.map((topic, index) => {
    //   return (
    //     <Link to={`/topics/${topic.slug}`} key={index}>
    //       <div className="topic">
    //         <p>{topic.slug}</p>
    //       </div>
    //     </Link>
    //   );
    // })
  );
};

export default TopicsList;
