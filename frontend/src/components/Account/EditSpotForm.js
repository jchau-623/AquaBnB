import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as spotActions from "../../store/spots";

const EditSpotForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const currSpot = useSelector((state) => state.spots.currSpot);
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState(currSpot?.name);
  const [type, setType] = useState(currSpot?.type);
  const [title, setTitle] = useState(currSpot?.title);
  const [pets, setPets] = useState(currSpot?.pets);
  const [totalOccupancy, setTotalOccupancy] = useState(
    currSpot?.totalOccupancy
  );
  const [totalBedrooms, setTotalBedrooms] = useState(currSpot?.totalBedrooms);
  const [totalBathrooms, setTotalBathrooms] = useState(
    currSpot?.totalBathrooms
  );
  const [description, setDescription] = useState(currSpot?.description);
  const [hasWifi, setWifi] = useState(currSpot?.hasWifi);
  const [hasTV, setTV] = useState(currSpot?.hasTV);
  const [hasAC, setAC] = useState(currSpot?.hasAC);
  const [hasHeat, setHeat] = useState(currSpot?.hasHeat);
  const [price, setPrice] = useState(currSpot?.price);
  const [image, setImage] = useState(currSpot?.name);
  // const [coordinates, setCoordinates] = useState(currSpot?.coordinates);
  const reset = () => {
    setName(currSpot?.name);
    setType(currSpot?.type);
    setTitle(currSpot?.title);
    setPets(currSpot?.pets);
    setTotalOccupancy(currSpot?.totalOccupancy);
    setTotalBedrooms(currSpot?.totalBedrooms);
    setTotalBathrooms(currSpot?.totalBathrooms);
    setDescription(currSpot?.description);
    setWifi(currSpot?.hasWifi);
    setTV(currSpot?.hasTV);
    setAC(currSpot?.hasAC);
    setHeat(currSpot?.hasHeat);
    setPrice(currSpot?.price);
    // setCoordinates(currSpot?.coordinates);
    setImage(currSpot?.image);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    const data = {
      spot: {
        type,
        name,
        title,
        pets,
        totalOccupancy: parseInt(totalOccupancy, 10),
        totalBedrooms: parseInt(totalBedrooms, 10),
        totalBathrooms: parseInt(totalBathrooms, 10),
        description,
        hasWifi,
        hasTV,
        hasAC,
        hasHeat,
        price: parseInt(price, 10),
        // coordinates,
        hostId: sessionUser.id,
      },
    };

    resetSelections();
    reset();
    const id = currSpot.id;
    dispatch(spotActions.editOneSpot(id, data.spot))
      .then(() => {
        setShowModal(false);
      })
      .catch(async (res) => {
        const data = await res;
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  const resetSelections = () => {
    setWifi(false);
    setTV(false);
    setAC(false);
    setHeat(false);
    document
      .querySelectorAll(".selected")
      .forEach((each) => each.classList.remove("selected"));
  };

  const selectToggle = (e) => {
    e.target.classList.toggle("selected");
  };
  return (
    <div className="add-place-modal">
      <div className="header">
        <i className="fas fa-times" onClick={() => setShowModal(false)}></i>
        <span>Edit {currSpot?.name}</span>
      </div>
      <form onSubmit={onSubmit} className="add-place-form">
        <ul className="errors">
          {errors.length > 0 && errors.map((err) => <li key={err}>{err}</li>)}
        </ul>
        <div className="select-container">
          <label>
            Type of Property
            <select
              className="select-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Atlantis">Atlantis</option>
              <option value="Pavlopetri">Pavlopetri</option>
              <option value="Heracleion">Heracleion</option>
              <option value="Baiae">Baiae</option>
            </select>
          </label>
        </div>
        <div className="add-place-inputs">
          <input
            className="top-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name of Property"
            // required
          />
          <input
            className="mid-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Heading"
            // required
          />

          <input
            type="number"
            value={totalOccupancy}
            onChange={(e) => setTotalOccupancy(e.target.value)}
            placeholder="Number of guests"
            // required
          />
          <input
            type="number"
            value={totalBedrooms}
            onChange={(e) => setTotalBedrooms(e.target.value)}
            placeholder="Number of bedrooms"
            // required
          />
          <input
            type="number"
            value={totalBathrooms}
            onChange={(e) => setTotalBathrooms(e.target.value)}
            placeholder="Number of bathrooms"
            // required
          />
          <input
            className="bottom-input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price per night"
            // required
          />
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          // required
        />
        <div className="amenities-options">
          Select all that apply:
          <div className="amenities">
            <div
              className={`amenity ${hasWifi ? "selected" : ""}`}
              onClick={(e) => {
                selectToggle(e);
                setWifi(!hasWifi);
              }}
            >
              Wifi
            </div>
            <div
              className={`amenity ${pets ? "selected" : ""}`}
              onClick={(e) => {
                selectToggle(e);
                setPets(!pets);
              }}
            >
              Pets Allowed
            </div>
            <div
              className={`amenity ${hasTV ? "selected" : ""}`}
              onClick={(e) => {
                selectToggle(e);
                setTV(!hasTV);
              }}
            >
              TV
            </div>
            <div
              className={`amenity ${hasAC ? "selected" : ""}`}
              onClick={(e) => {
                selectToggle(e);
                setAC(!hasAC);
              }}
            >
              Air Conditioning
            </div>
            {/* <div
              className={`amenity ${hasHeat ? "selected" : ""}`}
              onClick={(e) => {
                selectToggle(e);
                setHeat(!hasHeat);
              }}
            >
              Heat
            </div> */}
          </div>
          {/* <div className="clear-selections" onClick={resetSelections}>
            Clear All
          </div> */}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditSpotForm;
