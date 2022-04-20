import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../HomeFeed/HomeFeed.css';
// import Footer from '../Footer/index';

function UserFeed() {
  const sessionUser = useSelector((state) => state.session.user);
  const allSpots = useSelector((state) => state.spots);
  const spotsArr = Object.values(allSpots);
  const recSpots = spotsArr.filter(
    (spot) => spot.userId !== sessionUser.id
  );

  if (recSpots.length) {
    return (
      <>
        <h2 id='recommended'>Recommended Cities for you!</h2>
        <ul className='unorderedList'>
          {recSpots.map((spot) => {
            return (
              <li key={spot.id} className='allStories'>
                <div className='story-container'>
                  <div className='imgDiv'>
                    <NavLink
                      className='story-link'
                      to={`/listings/${spot.id}`}
                    >
                                                                <h2 className='myuploadStoryTitle'>{spot.title}</h2>
                      <img id='imgThumbnail' src={spot.imageUrl} />
                    </NavLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div id="spacer"></div>
        {/* <Footer /> */}
      </>
    );
  }
}

export default UserFeed;
