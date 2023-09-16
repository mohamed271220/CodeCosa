import React from "react";
import Gred from "./Gred.svg";
import "./index.css";
const ExampleCarouselImage = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(13,110,253)",
        height: "48rem",
      }}
   className="box"
    >
      <img className="rectangle" alt="Rectangle" src={Gred} />
      {children}
    </div>
  );
};

export default ExampleCarouselImage;
