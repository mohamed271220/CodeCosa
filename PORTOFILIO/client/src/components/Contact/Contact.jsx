import React from "react";
import { GeoAlt, Mailbox, Telephone } from "react-bootstrap-icons";
import "./index.css";
const Contact = () => {
  return (
    <div className="custom-section grey" id="contact">
      <h1>Contact </h1>
      <p className="custom-section-desc">
        Stop wasting time and money designing and managing a website that
        doesn’t get results. Happiness guaranteed!
      </p>

      <div className="location-map-container">
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.5180348749846!2d32.30312487558107!3d31.26176295987327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99c53d29f10a9%3A0x9a317d59353b4b95!2sSaad%20Zaghloul%2C%20El%20Sharq%2C%20Port%20Said%20Governorate%208572107!5e0!3m2!1sen!2seg!4v1691222775661!5m2!1sen!2seg"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-info">
          <div className="info-container">
            <div className=" geo icon">
              <GeoAlt color={"#fff"} size={25} />
            </div>{" "}
            <div>
              Egypt <br />
              Port Said Governorate
            </div>
          </div>
          <div className="info-container">
            <div className="icon tele">
              <Telephone size={25} />
            </div>
            <div>+201223321607</div>
          </div>
          <div className="info-container">
            <div className="icon mail">
              <Mailbox size={25} />
            </div>{" "}
            <div>mohamedaprahym@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
