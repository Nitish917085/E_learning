import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Badge, Col, Container, ProgressBar, Row } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const [data, setData] = useState([]);

  const getImage = async () => {
    try {
      const response = await axios.get("http://localhost:5000", {
        headers:{
          Authorization:token,
          'Content-Type':'application/json'
        }
      });
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      {data.map((items) => {
        return (
          <Container
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
              <Col md={8}  className="p-lg-4 p-md-0 ">
                <Row className="p-xl-3 p-md-1">
                  <h5 class="card-title">{items.title}</h5>
                </Row>
                <Row>
                  <p className="p-lg-2 p-md-0 pe-2">
                    We provide exicillence in undrstanding th e things, You are
                    on the temple study.
                  </p>
                </Row>
                <Row className="p-xl-4 p-lg-4 pb-sm-1 p-md-0">
                  <Link to={`/course/${items._id}`} style={{ color: "white" }}>
                    <Button
                      style={{ backgroundColor: "violet" }}
                      variant="primary"
                    >
                      Start Course
                    </Button>
                  </Link>
                </Row>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default Home;
