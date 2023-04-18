import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Badge, Col, Container, ProgressBar, Row } from "react-bootstrap";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

const Topics = () => {
  const location = useLocation();
  let path = location.pathname.split("/");

  const [data, setData] = useState([]);
  const [topics, setTopics] = useState([]);
  const id = path[2];
  console.log("idf", path[2]);

  const getVideos = async () => {
    try {
      const response = await axios.post(`http://elearning-env.eba-rbczasni.ap-south-1.elasticbeanstalk.com/course`, {
        course_id: id,
      });

      console.log(response);
      const data = response.data;
      setData(data);
      setTopics(data.topicsId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <Container
        className="m-4 mx-auto"
        style={{
          backgroundColor: "white",
          border: "2px solid gray",
          borderRadius: "15px",
        }}
      >
        <Accordion
          className="my-2"
          style={{ padding: "0" }}
          defaultActiveKey="0"
        >
          <div className="mx-auto">
            {topics.map((items, index) => {
              console.log("items", items);
              return (
                <Accordion.Item eventKey={`${index}`}>
                  <Accordion.Header>
                    <Container
                      fluid
                      className="m-4 mx-auto"
                      style={{
                        backgroundColor: "white",
                        border: "2px solid gray",
                        borderRadius: "15px",
                      }}
                    >
                      <Row>
                        <Col md={4} className="p-3">
                          <img
                            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            className="card-img-top"
                            alt="..."
                          />
                        </Col>
                        <Col md={8} className="p-lg-4 p-md-0 ">
                          <Row className="p-xl-3 p-md-1">
                            <h4 class="card-title">{items.title}</h4>
                          </Row>
                          <Row>
                            <p className="p-lg-2 p-md-0">
                              We provide exicillence in undrstanding th e
                              things, You are on the temple study.
                            </p>
                          </Row>
                          <Row className="p-xl-5 p-lg-4 pb-sm-1 p-md-0">
                            <ProgressBar
                              className="w-75 mx-auto"
                              now={60}
                              label={`${60}%`}
                            />
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      {items.videosId.map((itemss, indexs) => {
                        return (
                          <Link to={`/videos/${itemss}`}>
                            <div>
                              <h3> Lecture {indexs + 1}</h3>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </div>
        </Accordion>
      </Container>
    </div>
  );
};

export default Topics;
