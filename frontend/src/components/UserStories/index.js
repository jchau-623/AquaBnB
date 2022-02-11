import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { deleteStory } from '../../store/stories';
// import Footer from '../Footer/index';
import './UserStories.css';

function UserStories() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const allStories = useSelector((state) => state.stories);
  const storiesArr = Object.values(allStories);

  let userStories;

  if (sessionUser) {
    userStories = storiesArr.filter(
      (story) => story.authorId === sessionUser.id
    );

    return (
      <>
        <h2 className='rec-title'>My Spots</h2>
        <ul className='unorderedList-myupload'>
          {userStories.map((story) => {
            return (
              <li key={story.id} className='allStories-myupload'>
                <div className='story-container-myupload'>
                  <NavLink className='header' to={`/listings/${story.id}`}>
                  </NavLink>
                  <div className='imgDiv'>
                    <NavLink
                      className='story-link'
                      to={`/listings/${story.id}`}
                    >
                                          <h2 className='myuploadStoryTitle'>{story.title}</h2>
                      <img id='imgThumbnail' src={story.imageUrl} />
                      <div className='story-details'>
                    <div id='e-d-btn-ctn'>
                      <NavLink to={`/edit/listing/${story.id}`}>
                        <button className='edit-btn-myupload' type='submit'>
                          Edit
                        </button>
                      </NavLink>
                      <button
                        className='del-btn'
                        type='submit'
                        onClick={() => dispatch(deleteStory(story.id))}
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

export default UserStories;
