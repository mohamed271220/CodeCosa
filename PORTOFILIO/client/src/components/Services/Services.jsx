import React from "react";
import Node from "./assets/node.jsx";
import ReactLogo from "./assets/react.jsx";
import Figma from "./assets/figma.jsx";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

const Services = () => {
  return (
    <div data-section className="custom-section grey" id="services">
      <h1>Our Services</h1>
      <p className="custom-section-desc">
        Stop wasting time and money designing and managing a website that
        doesn’t get results. Happiness guaranteed!
      </p>
      <Container className="services-main-container">
        <Row className="align-items-center justify-content-center services-container">
          <Col md={12} lg={{ span: 3 }} className="service-card">
            <div className="service-logo">
              <h3>NodeJs Servers</h3>
              <div className="service-logo-container node">
                <Node />
              </div>
            </div>
            <p>
              Creating , designing and managing RESTful API ,Also managing and
              optimizing mongodb databases.
            </p>
            <h5>LEARN MORE</h5>
          </Col>
          <Col md={12} lg={{ span: 3 }} className="service-card">
            <div className="service-logo">
              <h3>ReactJs WebApps</h3>
              <div className="service-logo-container react">
                <ReactLogo />
              </div>
            </div>
            <p>
              Using latest react libraries and packages to rapidly create well
              optimized web applications.
            </p>
            <h5>LEARN MORE</h5>
          </Col>
          <Col md={12} lg={{ span: 3 }} className="service-card">
            <div className="service-logo">
              <h3>Figma Designs</h3>
              <div className="service-logo-container figma">
                <Figma />
              </div>
            </div>
            <p>
              Designing low fidelity mockups and prototypes to make sure that
              both ends are satisfied before work is started.
            </p>
            <h5>LEARN MORE</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
