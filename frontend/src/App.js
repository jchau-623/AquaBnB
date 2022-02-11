import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

//import components
// import LoginFormPage from './components/LoginFormPage';
// import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import Homepage from './components/HomePage';
import User from './components/User';
import StoryDetail from './components/StoryDetails';
import UserStories from './components/UserStories';
import WriteStory from './components/WriteStory';
import EditStory from './components/UpdateStory';
import Footer from './components/Footer';
import { getStories } from './store/stories';
import { getComments } from './store/comments';

//import thunk
import * as sessionActions from './store/session';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getStories());
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
            <UserStories />
          </Route>
          <Route path='/listing/new'>
            <WriteStory />
          </Route>
          <Route path='/listings/:storyId'>
            <StoryDetail />
          </Route>
          <Route path='/edit/listing/:editStoryId'>
            <EditStory />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
