import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as spotActions from "../../store/spots";

const AddPlaceForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [type, setType] = useState("Atlantis");
  const [title, setTitle] = useState("");
  const [pets, setPets] = useState(false);
  const [totalOccupancy, setTotalOccupancy] = useState("");
  const [totalBedrooms, setTotalBedrooms] = useState("");
  const [totalBathrooms, setTotalBathrooms] = useState("");
  const [description, setDescription] = useState("");
  const [hasWifi, setWifi] = useState(false);
  const [hasTV, setTV] = useState(false);
  const [hasAC, setAC] = useState(false);
  const [hasHeat, setHeat] = useState(false);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  // const [coordinates, setCoordinates] = useState("");
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    const errs = [];
    if (name.length === 0) errs.push("Please provide a name.");
    if (title.length === 0) errs.push("Please provide a title.");
    if (totalBathrooms === 0)
      errs.push("You must provide a bathroom.");
    if (totalBedrooms === 0)
      errs.push("You must provide a bedroom.");
    if (totalOccupancy === 0)
      errs.push("Please provide a maximum occupancy.");
    if (description.length === 0) errs.push("Please provide a description");
    if (price === 0)
      errs.push("Please provide a price.");

    if (errs.length > 0) {
      setDisabled(true);
      setErrors(errs);
    } else {
      setDisabled(false);
      setErrors([]);
    }
  }, [
    name,
    title,
    totalBathrooms,
    totalBedrooms,
    totalOccupancy,
    description,
    price,
  ]);
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
        postedAt: new Date(),
        // coordinates,
        hostId: sessionUser.id,
      },
      image,
    };
    resetSelections();
    reset();
    dispatch(spotActions.addNewSpot(data))
      .then(() => {
        setTimeout(() => {
          spotActions.getHostsSpots(sessionUser);
        }, 100);
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
  const reset = () => {
    setShowModal(false);
    setName("");
    setType("Atlantis");
    setTitle("");
    setPets(false);
    setTotalOccupancy("");
    setTotalBedrooms("");
    setTotalBathrooms("");
    setDescription("");
    setPrice("");
    setImage(null);
    // setCoordinates("");
    resetSelections();
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

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };
  const selectToggle = (e) => {
    e.target.classList.toggle("selected");
  };
  return (
    <div className="add-place-modal">
      <div className="header">
        <i className="fas fa-times" onClick={() => setShowModal(false)}></i>
        <span>Add a Place</span>
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
            placeholder="Name of property"
            // required
          />
          <input
            className="mid-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Address"
            // required
          />

          <input
            type="number"
            value={totalOccupancy}
            min={1}
            onChange={(e) => setTotalOccupancy(e.target.value)}
            placeholder="Maximum occupancy"
            // required
          />
          <input
            type="number"
            value={totalBedrooms}
            min={1}
            onChange={(e) => setTotalBedrooms(e.target.value)}
            placeholder="How many bedrooms"
            // required
          />
          <input
            type="number"
            value={totalBathrooms}
            min={1}
            onChange={(e) => setTotalBathrooms(e.target.value)}
            placeholder="How many bathrooms"
            // required
          />

          <input
            className="bottom-input"
            type="number"
            value={price}
            min={1}
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
              className="amenity"
              onClick={(e) => {
                selectToggle(e);
                setWifi(!hasWifi);
              }}
            >
              Wifi
            </div>
            <div
              className="amenity"
              onClick={(e) => {
                selectToggle(e);
                setPets(!pets);
              }}
            >
              Pets Allowed
            </div>
            <div
              className="amenity tv"
              onClick={(e) => {
                selectToggle(e);
                setTV(!hasTV);
              }}
            >
              TV
            </div>
            <div
              className="amenity"
              onClick={(e) => {
                selectToggle(e);
                setAC(!hasAC);
              }}
            >
              Air Conditioning
            </div>
            {/* <div
              className="amenity"
              onClick={(e) => {
                selectToggle(e);
                setHeat(!hasHeat);
              }}
            >
              Heat
            </div> */}
          </div>
          {/* <div className="clear-selections" onClick={resetSelections}>
            Clear All Selections
          </div> */}
        </div>
        <button disabled={disabled}>Host this Place</button>
      </form>
    </div>
  );
};

export default AddPlaceForm;
