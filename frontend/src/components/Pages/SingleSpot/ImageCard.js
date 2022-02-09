import React from "react";
import defaultImg from "../../../assets/default.jpg";

const ImageTile = ({ images }) => {
  return (
    <div className="all-spot-images">
      {/* {images?.length > 0 &&
        images.map((image) => (
          <div className="spot-image-container" key={image.id}>
            <img alt={image.url} src='https://thumbor.thedailymeal.com/Cxdj9WZxFXm3_P0p8kzcrZ52sog=//https://www.theactivetimes.com/sites/default/files/2020/03/30/Coral_Reefs_Hero_Dreamstime.jpg'></img>
          </div>
        ))} */}
        <div className="spot-image-container">
          <img src="https://thumbor.thedailymeal.com/Cxdj9WZxFXm3_P0p8kzcrZ52sog=//https://www.theactivetimes.com/sites/default/files/2020/03/30/Coral_Reefs_Hero_Dreamstime.jpg"></img>
          </div>
      {!images?.length && (
        <div className="spot-image-container">
          <img alt={"default"} src={defaultImg}></img>
        </div>
      )}
    </div>
  );
};

export default ImageTile;
