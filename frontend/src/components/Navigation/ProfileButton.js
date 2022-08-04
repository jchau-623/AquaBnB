import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

function ProfileButton() {
  // eslint-disable-next-line
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const [showDropdown, setShowDropdown] = useState(false)

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault()
    setShowDropdown(!showDropdown);
    // this toggles it true/false. you only set it to true, which is why it never becomes false again
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <div id='profile-div'>
      <div className='hamburger-icon'>
      <i className="fa-solid fa-bars"
        onClick={handleClick}></i>
        <i className="fa-solid fa-user"
        onClick={handleClick}></i>
        </div>
      {showDropdown &&
        <ul className='profile-dropdown'>
          <li className='prof-list-item'>
            <NavLink className='story-link-nav' to={`/listing/new`}>
              Create Spot
            </NavLink>
          </li>
          <li className='prof-list-item'>
            <NavLink className='story-link-nav' to={`/user/listings`}>
              My Spots
            </NavLink>
          </li>
          <li className='prof-list-item'>
            <button id='logout-btn' onClick={logout}>
              Log Out
            </button>
          </li>
        </ul>
      }
    </div>
  );
}

export default ProfileButton;
