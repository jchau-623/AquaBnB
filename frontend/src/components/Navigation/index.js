import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const credential = "Demo";
  const password = "password";

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <button id="demo-btn"
          onClick={() => dispatch(sessionActions.login({ credential, password }))}>
            Demo User
        </button>
      </>
    );
  }

  return (
    <div id="nav-container">
      <div id="home-link-div">
        <NavLink id="home-link" exact to="/">
          {/* <img className='home-link-pic' src="https://t4.ftcdn.net/jpg/03/60/92/43/360_F_360924349_AQNyY0W1WAsCCy4Z70WMn1vvGpGlvTWv.jpg"></img> */}
          Home</NavLink>

      </div>
      <div id="nav-buttons">
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
