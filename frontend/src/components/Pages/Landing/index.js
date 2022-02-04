import React from "react";
import MainImage from "./MainImage";
import "./Landing.css";
import LocationCard from "./LocationCard";
const Landing = (props) => {
  const places = [
    {
      name: "Atlantis",
      id: "blah",
      distance: "blah",
      type: "blah",
    },
    {
      name: "Pavlopetri",
      id: "blah",
      distance: "blah",
      type: "blah",
    },
    {
      name: "Heracleion",
      id: "blah",
      distance: "blah",
      type: "blah",
    },
    { name: "Baiae", id: "blah", distance: "blah", type: "blah" },
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
