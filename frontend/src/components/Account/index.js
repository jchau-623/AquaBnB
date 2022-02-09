import React, { Children, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import AddPlaceModal from "./AddPlaceModal";
import BecomeHostModal from "./BecomeHostModal";

import "./AddPlaceForm.css";
import HostSpots from "../Pages/Spots/HostSpots";

const Account = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [host, setHost] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  let components;
  if (sessionUser?.isHost) {
    components = (
      <>
        <AddPlaceModal setShowModal={setShowModal} />
        <HostSpots />
      </>
    );
  } else {
    components = (
      <>
        <BecomeHostModal setShowModal={setShowModal} />
      </>
    );
  }
  return (
    <div>
      <div className="components-container">
        <h2 style={{ fontSize: 32 }}>Account</h2>
        <h2>{sessionUser.name ? `Name: ${sessionUser?.name}` : ""}</h2>
        <h2>
          {sessionUser.username ? `Username: ${sessionUser?.username}` : ""}
        </h2>
        <h3>{sessionUser.email ? `Email: ${sessionUser?.email}` : ""}</h3>
      </div>
      <div className="components-container">
        {components}
      </div>
    </div>
  );
};

export default Account;
