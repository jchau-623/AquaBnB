import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

//import components
// import LoginFormPage from './components/LoginFormPage';
// import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import Homepage from './components/HomePage';
import User from './components/User';
import SpotDetail from './components/SpotDetails';
import UserSpots from './components/UserSpots';
import WriteSpot from './components/WriteSpot';
import EditSpot from './components/UpdateSpot';
import Footer from './components/Footer';
import { getSpots } from './store/spots';
import { getComments } from './store/comments';

//import thunk
import * as sessionActions from './store/session';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getSpots());
    dispatch(getComments());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path='/username'>
            <User />
          </Route>
          <Route path='/user/listings'>
            <UserSpots />
          </Route>
          <Route path='/listing/new'>
            <WriteSpot />
          </Route>
          <Route path='/listings/:spotId'>
            <SpotDetail />
          </Route>
          <Route path='/edit/listing/:editSpotId'>
            <EditSpot />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
