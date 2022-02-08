import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SpotCard from "../../SpotsCard";
import ImageTile from "./ImageCard";
import * as spotActions from "../../../store/spots";
import Heading from "./Heading";
import "./SingleSpot.css";
import Description from "./Description";

const SingleSpot = (props) => {
  const dispatch = useDispatch();

  const currSpot = useSelector((state) => state.spots.currSpot);
  const { id } = useParams();

  useEffect(() => {
    dispatch(spotActions.getOneSpot(id));
  }, [dispatch, id]);

  return (
    <div>
      <Heading spot={currSpot} />
      <ImageTile images={currSpot?.Images} />
      <Description spot={currSpot} />
    </div>
  );
};

export default SingleSpot;
