import React, { useEffect, useState } from "react";
import { Tab, Badge, Container, Row } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import ReactPlayer from "react-player/lazy";

const Videos = () => {
  const location = useLocation();
  let path = location.pathname.split("/");
  const id = path[2];

  const [video, setVideo] = useState([]);
  const [urlId, setUrlId] = useState("");
  const [urlss, setUrlss] = useState("");
  const [key, setKey] = useState("home");
  //console.log("videos", path[2]);

  const getVideo = async () => {
    try {
      const response = await axios.post(`http://elearning-env.eba-rbczasni.ap-south-1.elasticbeanstalk.com/videos`, {
        video_id: id,
      });
      setVideo(response.data);
      let url = response.data.url;

      url = url.split("/");
      setUrlId("https://drive.google.com/file/d/" + url[5] + "/preview");

      setUrlId("https://drive.google.com/uc?id=" + url[5]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <Container>
      <Row>
        <ReactPlayer width="100%" height="100%" url={urlId} controls />
        <h3 className="mx-5">
          <Badge bg="success">{video.title}</Badge>
        </h3>
      </Row>
      <Row>
        <p className="my-auto mx-4 flex-column">
          <h2> Machine learning?</h2>
          Machine learning is a branch of artificial intelligence (AI) and
          computer science which focuses on the use of data and algorithms to
          imitate the way that humans learn, gradually improving its accuracy.
          IBM has a rich history with machine learning. One of its own, Arthur
          Samuel, is credited for coining the term, “machine learning” with his
          research (PDF, 481 KB) (link resides outside IBM) around the game of
          checkers
        </p>
      </Row>

      <div>
        <br />
        <div>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              <p>
                Machine learning is a branch of artificial intelligence (AI) and
                computer science which focuses on the use of data and algorithms
                to imitate the way that humans learn, gradually improving its
                accuracy.
              </p>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <p>
                Machine learning is a branch of artificial intelligence (AI) and
                computer science which focuses on the use of data and algorithms
                to imitate the way that humans learn, gradually improving its
                accuracy.
              </p>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              <p>
                Machine learning is a branch of artificial intelligence (AI) and
                computer science which focuses on the use of data and algorithms
                to imitate the way that humans learn, gradually improving its
                accuracy.
              </p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default Videos;
