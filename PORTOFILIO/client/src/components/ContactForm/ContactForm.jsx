import React, { useState } from "react";
// import { Images } from "../../constants";
import { clients } from "../../client";
import "./index.css";

const Footer = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setloading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setloading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    clients.create(contact).then(() => {
      setloading(false);
      setisFormSubmitted(true);
    });
  };
  return (
    <div className="grey form-container">
      {!isFormSubmitted ? (
        <>
          <h2 className="head-text">Leave A Message.</h2>
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {loading ? "sending" : "send message"}
            </button>
          </div>
        </>
      ) : (
        <div>
          <h3 className="head-text">Thank you..</h3>
        </div>
      )}
    </div>
  );
};

export default Footer;
