import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import { Container, Row, Col } from "react-bootstrap";
import {
  ArrowDownCircle,
  ArrowLeftSquare,
  ArrowRightCircle,
  ArrowRightSquare,
} from "react-bootstrap-icons";
import carou1 from "./assets/carou1.png";
import carou2 from "./assets/carou2.png";
import carou3 from "./assets/carou3.png";
import resume from "./assets/my_resume.pdf";

const Banner = () => {
  const [indexCarou, setIndexCarou] = useState(0);
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex) => {
    setIndexCarou(selectedIndex);
  };

  // Animation
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = ["React Developer", "Web Developer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const isMobile = window.innerWidth < 768;

  return (
    <section data-section id="home" className="banner">
      <Carousel
        interval={5000}
        activeIndex={indexCarou}
        onSelect={handleSelect}
        nextIcon={isMobile ? "" : <ArrowRightSquare size={25} />}
        prevIcon={isMobile ? "" : <ArrowLeftSquare size={25} />}
      >
        <Carousel.Item interval={50000} as={"div"}>
          <ExampleCarouselImage text="First slide">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col xs={12} md={{ span: 5, offset: 1 }}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {"Hi i'm mohamed"} <span className="wrap">{text}</span>
                  </h1>
                  <p>An aspiring web developer with a passion for building</p>
                  <button>
                    <a href="#contact" className="contact-btn">
                      Let's connect <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  <img className="header-img" src={carou1} alt="header" />
                </Col>
              </Row>
            </Container>
          </ExampleCarouselImage>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col xs={12} md={{ span: 5, offset: 1 }}>
                  <h1>Using MERN Stack</h1>

                  <p>
                    We blend insights and strategy to create digital products
                    for forward-thinking organisations.
                  </p>
                  <div className="button-group">
                    <button>
                      <a href="#contact" className="contact-btn">
                        Let's connect <ArrowRightCircle size={25} />
                      </a>
                    </button>
                    <button className="secondary" onClick={() => {}}>
                      <a download="mohamed_magdy" href={resume} style={{
                        textDecoration:'none',
                        color:'white'
                      }}>
                        Resume <ArrowDownCircle size={25} />
                      </a>
                    </button>
                  </div>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  <img className="header-img" src={carou2} alt="header" />
                </Col>
              </Row>
            </Container>
          </ExampleCarouselImage>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col xs={12} md={{ span: 5, offset: 1 }}>
                  <h1>Using MERN Stack</h1>

                  <p>
                    We blend insights and strategy to create digital products
                    for forward-thinking organisations.
                  </p>
                  <div className="button-group">
                    <button onClick={() => {}}>
                      Let's connect <ArrowRightCircle size={25} />
                    </button>
                    <button className="secondary" onClick={() => {}}>
                      <a download="mohamed_magdy" href={resume} style={{
                        textDecoration:'none',
                        color:'white'
                      }}>
                        Resume <ArrowDownCircle size={25} />
                      </a>
                    </button>
                  </div>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  <img className="header-img" src={carou3} alt="header" />
                </Col>
              </Row>
            </Container>
          </ExampleCarouselImage>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
