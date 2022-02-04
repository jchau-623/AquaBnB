import React from "react";
import { Link } from "react-router-dom";

const MainImage = (props) => {
  return (
    <div className="main-image-container">
      <div className="main-image">
        <div className="image-text">
          Need Help? Click me!
          <Link className="image-button" to="/places">
            blah
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
