import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Facebook, Linkedin, Instagram } from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import Logo from "./logo/Logo";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      alert("Thanks for subscribing.");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <footer
      style={{
        backgroundColor: "#10107B",
        color: "white",
        padding: "30px 0",
        position: "relative",
        bottom: "0",
        left: "0",
        right: "0",
        marginTop: "100px",
      }}
    >
      <Container>
        <div className="text-center mb-3">
          <Logo />
        </div>
        <Row>
          <Col md={15} className="mb-4">
            <div className="d-flex justify-content-center">
              <div className="input-group w-auto">
                <input
                  type="text"
                  className="form-control me-3"
                  placeholder="Enter your mail"
                  aria-label="Enter your mail"
                  aria-describedby="button-addon1"
                  onChange={handleEmailChange}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon1"
                  data-mdb-ripple-color="dark"
                  style={{ backgroundColor: "#7848F4" }}
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <ul className="list-unstyled list-inline text-center text-light d-flex justify-content-center gap-3">
              <li className="list-inline-item">
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/about"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/terms"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <hr style={{ backgroundColor: "white" }} />
        <Row className=" ">
          <Col className="text-center  ">
            <Facebook size={20} color="white" className="mx-2 " />
            <Linkedin size={20} color="white" className="mx-2" />
            <Instagram size={20} color="white" className="mx-2" />
          </Col>
        </Row>
        <Row className="">
          <div style={{ fontSize: "12px" }} className="text-end ">
            © 2024 Event Hive. All rights reserved.
          </div>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
