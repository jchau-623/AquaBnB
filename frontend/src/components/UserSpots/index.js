import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { deleteSpot } from '../../store/spots';
// import Footer from '../Footer/index';
import './UserSpots.css';

function UserSpots() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const allSpots = useSelector((state) => state.spots);
  const spotsArr = Object.values(allSpots);

  let userSpots;

  if (sessionUser) {
    userSpots = spotsArr.filter(
      (spot) => spot.userId === sessionUser.id
    );

    return (
      <>
        <h2 className='rec-title'>My Spots</h2>
        <ul className='unorderedList-myupload'>
          {userSpots.map((spot) => {
            return (
              <li key={spot.id} className='allStories-myupload'>
                <div className='story-container-myupload'>
                  <NavLink className='header' to={`/listings/${spot.id}`}>
                  </NavLink>
                  <div className='imgDiv'>
                    <NavLink
                      className='story-link'
                      to={`/listings/${spot.id}`}
                    >
                                          <h2 className='myuploadStoryTitle'>{spot.title}</h2>
                      <img id='imgThumbnail' src={spot.imageUrl} />
                      <div className='story-details'>
                    <div id='e-d-btn-ctn'>
                      <NavLink to={`/edit/listing/${spot.id}`}>
                        <button className='edit-btn-myupload' type='submit'>
                          Edit
                        </button>
                      </NavLink>
                      <button
                        className='del-btn'
                        type='submit'
                        onClick={() => dispatch(deleteSpot(spot.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                    </NavLink>

                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        {/* <Footer /> */}
      </>
    );
  } else {
    return history.push('/');
  }
}

export default UserSpots;
