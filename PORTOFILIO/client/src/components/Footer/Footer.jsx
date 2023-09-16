import React from "react";
import "./index.css";
import Logo from "../Logo";
import { Facebook, Github, Linkedin, Twitter } from "react-bootstrap-icons";
const Footer = () => {
  return (
    <div className="custom-section black">
      <div>
        <Logo />
      </div>
      <div className="social-media">
        <a>
          <Linkedin
            href="https://www.linkedin.com/in/mohamed-m-ibrahim-51a88b252/"
            size={20}
          />
        </a>
        <a href="https://www.facebook.com/mohamed.magdy.5612/">
          <Facebook size={20} />
        </a>
        <a href="https://github.com/mohamed271220">
          <Github size={20} />
        </a>
      </div>
      <div>
        <p>+201223321607</p>
        <p>mohamedaprahym@gmail.com</p>
        <p>
          Developed by{" "}
          <a href="https://github.com/mohamed271220">Mohamed Magdy</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
