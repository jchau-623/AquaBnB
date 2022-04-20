import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import './HomeFeed.css';
import '../UserSpots/UserSpots.css';

function Home() {
  const allSpots = useSelector((state) => state.spots);
  const spotsArr = Object.values(allSpots);

  if (spotsArr.length) {
    return (
      <>
        <ul className='unorderedList'>
          {spotsArr.map((spot) => {
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
      </>
    );
  } else {
    return null;
  }
}

export default Home;
