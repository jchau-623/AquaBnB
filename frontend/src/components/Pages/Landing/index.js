import React from "react";
import MainImage from "./MainImage";
import "./Landing.css";
import LocationCard from "./LocationCard";
const Landing = (props) => {
  const places = [
    {
      name: "Atlantis",
      id: "Atlantis",
      type: "Atlantis",
    },
    {
      name: "Pavlopetri",
      id: "Pavlopetri",
      type: "Pavlopetri",
    },
    {
      name: "Heracleion",
      id: "Heracleion",
      type: "Heracleion",
    },
    {
      name: "Baiae",
      id: "Baiae",
      type: "Baiae"
    },
  ];
  return (
    <div>
      <MainImage />
      <div className="locations">
        {places.map((place) => (
          <LocationCard place={place} key={place.name} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
