import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteStory } from '../../store/stories';
import Comments from '../Comments';
// import Footer from '../Footer/index';
import EditStory from '../UpdateStory';
import './StoryDetails.css';

function StoryDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { storyId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const story = useSelector((state) => state.stories[storyId]);
  const [showComments, setShowComments] = useState(false);
  const deletingStory = () => dispatch(deleteStory(story.id));

  if (story && sessionUser && story.authorId !== sessionUser.id) {
    return (
      <>
        <div id='story-comments'>
          <div id='story-details'>
            <h1 className='title'>{story.title}</h1>
            <h3 className='subtitle'>{story.subtitle}</h3>
            <p className='user-name'>Discovered by {story.User.username}</p>
            <img id='sd-img' src={story.imageUrl} alt='Bad Image Link' />
            <h3 className='subtitle'>{story.body}</h3>
          </div>
          <Comments />
          {/* <Footer /> */}
        </div>
      </>
    );
  } else if (story && sessionUser && story.authorId === sessionUser.id) {
    return (
      <>
        <div id='story-comments'>
          <div id='story-details'>
            <h1 className='title'>{story.title}</h1>
            <h3 className='subtitle'>{story.subtitle}</h3>
            <p className='user-name'>Listing from {story.User.username}</p>
            <div id='e-d-btn-ctn'>
              <NavLink to={`/edit/listing/${story.id}`}>
                <button className='edit-btn' type='submit'>
                  Edit
                </button>
              </NavLink>
              <button
                className='del-btn'
                type='submit'
                // onClick={() => dispatch(deleteStory(story.id))}
                onClick={() => {
                  deletingStory();
                  history.push('/');
                }}
              >
                Delete
              </button>
            </div>
            <img id='sd-img' src={story.imageUrl} alt='Bad Image Link' />
            <h3 className='subtitle'>{story.body}</h3>
          </div>
          <Comments />
          {/* <Footer /> */}
        </div>
      </>
    );
  } else if (story) {
    return (
      <>
        <div id='story-comments'>
          <div id='story-details'>
            <h1 className='title'>{story.title}</h1>
            <h3 className='subtitle'>{story.subtitle}</h3>
            <p className='user-name'>Listing from {story.User.username}</p>
            <img id='sd-img' src={story.imageUrl} alt='Bad Image Link' />
            <h3 className='subtitle'>{story.body}</h3>
          </div>
          <Comments />
          {/* <Footer /> */}
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default StoryDetail;
