import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Logo";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../Banner/ExampleCarouselImage";
import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import carou1 from "./assets/carou1.png";
import "./Hero.css";
import { ArrowUp } from "react-bootstrap-icons";

function Hero() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        setActiveLink(visibleSection.id);
        // console.log(activeLink);
      }
    });

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
      
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);

      });
    };
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        // className="bg-body-tertiary"
        bg={scrolled ? "light" : "primary"}
        data-bs-theme={scrolled ? "light" : "dark"}
        expand="lg"
        className={scrolled ? "scrolled" : ""}
      >
        <Container
          style={{
            justifyContent: "space-between",
          }}
        >
          <Navbar.Brand href="#home">
            <Logo scrolled={scrolled} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto main-nav">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home"
                    ? "active navbar-link"
                    : "navbar-link navbar-link-s"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#services"
                className={
                  activeLink === "services"
                    ? "active navbar-link"
                    : "navbar-link navbar-link-s"
                }
                onClick={() => onUpdateActiveLink("services")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                className={
                  activeLink === "portfolio"
                    ? "active navbar-link"
                    : "navbar-link navbar-link-s"
                }
                onClick={() => onUpdateActiveLink("portfolio")}
              >
                Portfolio
              </Nav.Link>

              <Nav.Link
                href="#qualifications"
                className={
                  activeLink === "qualifications"
                    ? "active navbar-link"
                    : "navbar-link navbar-link-s"
                }
                onClick={() => onUpdateActiveLink("qualifications")}
              >
                Qualifications
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills"
                    ? "active navbar-link"
                    : "navbar-link navbar-link-s"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
            </Nav>
            <Nav>
              <Button
                variant={scrolled ? "primary" : "light"}
                className={scrolled ? "custom-btn-primary" : "custom-btn-light"}
                style={{
                  // color: scrolled ? "white" : "rgb(13,110,253)",
                  width: "9rem",
                  height: "3rem",
                  fontSize: "1.6rem",
                  padding: "0px",
                  fontWeight: "bold",
                  alignItems: "center",
                }}
                href="#contact"
              >
                Contact
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {scrolled && (
        <div
          onClick={goToTop}
          variant="primary"
          className="scroll-top icon-position icon-style"
        >
          <ArrowUp />
        </div>
      )}
    </>
  );
}

export default Hero;
