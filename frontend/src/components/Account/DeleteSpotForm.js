import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import * as spotActions from "../../store/spots";

import "./BecomeHost.css";

const DeleteSpotForm = ({ setShowModal, spotId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const deleteSpot = () => {
    dispatch(spotActions.deleteOneSpot(spotId, user));
    setShowModal(false);
  };
  return (
    <div className="host-activate-container">
      <div className="host-activate">
        <div>
          Confirm delete
        </div>
        <button id="delete-spot" onClick={deleteSpot}>
          Delete
        </button>
        <button onClick={() => setShowModal(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteSpotForm;
