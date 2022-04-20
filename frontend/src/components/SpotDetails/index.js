import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteSpot } from '../../store/spots';
import Comments from '../Comments';
// import Footer from '../Footer/index';
import EditSpot from '../UpdateSpot';
import './SpotDetails.css';

function SpotDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spots[spotId]);
  const [showComments, setShowComments] = useState(false);
  const deletingSpot = () => dispatch(deleteSpot(spot.id));

  if (spot && sessionUser && spot.userId !== sessionUser.id) {
    return (
      <>
        <div id='story-comments'>
          <div id='story-details'>
            <h1 className='title'>{spot.title}</h1>
            <h3 className='subtitle'>{spot.subtitle}</h3>
            <p className='user-name'>Discovered by {spot.User.username}</p>
            <img id='sd-img' src={spot.imageUrl} alt='Bad Image Link' />
            <h3 className='subtitle'>{spot.body}</h3>
          </div>
          <Comments />
          {/* <Footer /> */}
        </div>
      </>
    );
  } else if (spot && sessionUser && spot.userId === sessionUser.id) {
    return (
      <>
        <div id='story-comments'>
          <div id='story-details'>
            <h1 className='title'>{spot.title}</h1>
            <h3 className='subtitle'>{spot.subtitle}</h3>
            <p className='user-name'>Listing from {spot.User.username}</p>
            <div id='e-d-btn-ctn'>
              <NavLink to={`/edit/listing/${spot.id}`}>
                <button className='edit-btn' type='submit'>
                  Edit
                </button>
              </NavLink>
              <button
                className='del-btn'
                type='submit'
                // onClick={() => dispatch(deleteSpot(spot.id))}
                onClick={() => {
                  deletingSpot();
                  history.push('/');
                }}
              >
                Delete
              </button>
            </div>
            <img id='sd-img' src={spot.imageUrl} alt='Bad Image Link' />
            <h3 className='subtitle'>{spot.body}</h3>
          </div>
          <Comments />
          {/* <Footer /> */}
        </div>
      </>
    );
  } else if (spot) {
    return (
      <>
        <div id='story-comments'>
          <div id='story-details'>
            <h1 className='title'>{spot.title}</h1>
            <h3 className='subtitle'>{spot.subtitle}</h3>
            <p className='user-name'>Discovered by {spot.User.username}</p>
            <img id='sd-img' src={spot.imageUrl} alt='Bad Image Link' />
            <h3 className='subtitle'>{spot.body}</h3>
          </div>
          <Comments />
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default SpotDetail;
