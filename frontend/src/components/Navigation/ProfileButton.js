import React, { useState, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginModal from "../LoginModal";
import { useModal } from "../../context/Modal";
import SignupModal from "../SignupModal";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { value, setValue } = useModal();
  const history = useHistory();
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu, value]);

  const logout = (e) => {
    // e.preventDefault();
    dispatch(sessionActions.logout());
    // return <Redirect to="/" />;
    history.push("/");
  };
  let sessionLinks;
  if (user) {
    sessionLinks = (
      <div>
        <div className="account-drop-btn" onClick={() => setShowMenu(true)}>
          <i className="fas fa-bars" />
          <i className="fas fa-user-circle" />
        </div>
        {showMenu && (
          <div className="drop-menu">
            {/* <div className="account-link">
              <Link to={`/users/${user.id}`}>
                {user.isHost ? "View your spots" : "Become a Host"}
              </Link>
            </div> */}
            <div className="account-link">
              <Link to={`/users/${user.id}`}>Account</Link>
            </div>
            <div className="account-link">
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    sessionLinks = (
      <div className="nav-btn">
        <LoginModal />
        <SignupModal />
      </div>
    );
  }
  return sessionLinks;
};
export default ProfileButton;
