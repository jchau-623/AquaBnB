import React from "react";

const Heading = ({ spot }) => {
  return (
    <div className="title-container">
      <h1 className="title">{spot?.title}</h1>
      <div>
        <span className="rating">{spot?.Reviews?.rating}</span>
        <span className="coordinates">{spot?.coordinates}</span>
      </div>
    </div>
  );
};

export default Heading;
