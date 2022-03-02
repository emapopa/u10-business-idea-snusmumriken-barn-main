import React from "react";


import { Button, Container, Col, Row } from "react-bootstrap";

import '../App.css';
import { getCurrentUser } from "../services/auth.service";

const Home = () => {

  const currentUser = getCurrentUser();

  return (
    <>
      <div >
        <Col sm={12} md={10} lg={8} className="m-auto">
          <Row>
            <img
              className="d-block mx-auto img-fluid"
              src="https://cdn.pixabay.com/photo/2019/09/06/19/32/tobacco-4457154_1280.jpg"
              alt="mysvg"
            />
          </Row>
        </Col>

      </div>
      <Container>
        <h1 className="container-fluid text-center mt-4" style={{ color: '#2A324B' }}>FÖR DIG SOM ÄLSKAR SNUS</h1>
        <h5 className="text-center text-center text-dark" style={{ color: '#2A324B' }}>
          Ta del av andra entusiasters favoriter, snus recept och tips!
        </h5>
        {!currentUser && (
          <div className="text-center">
            <Button href={"/login"} variant="#2A324B" style={{ color: 'white', background: "#2A324B", width: "10rem", margin: '1rem' }}>Logga in</Button>
            <Button href={"/register"} variant="#2A324B" style={{ color: 'white', background: "#2A324B", width: "10rem", margin: '1rem' }}>Registrera</Button>
          </div>
        )}
      </Container>
    </>
  );
};

export default Home;