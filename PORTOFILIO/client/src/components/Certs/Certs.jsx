import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, clients } from "../../client";
import "./index.css";
import CertIcon from "./assets/CertsIcon";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const Certs = () => {
  const [certs, setCerts] = useState([]);
  useEffect(() => {
    const query = '*[_type=="certs"]';
    clients.fetch(query).then((data) => {
      setCerts(data);
    });
  }, []);

  return (
    <div data-section className="custom-section grey" id="qualifications">
      <Container>
        <Row>
          <Col sm={12} md={{ span: 5, offset: 1 }}>
            <div className="custom-section-heading">
              <h5>A LITTLE MORE ABOUT US</h5>
              <h1>
                Relevant certificates and <br /> internships.{" "}
              </h1>
              <p className="">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
            <Accordion defaultActiveKey="0">
              {certs.map((cert, i) => (
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>{cert.title}</Accordion.Header>
                  <Accordion.Body>{cert.description}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <p>References served on demand. </p>
          </Col>
          <Col className="cets-icon" md={{ span: 5 }}>
            <CertIcon />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Certs;
