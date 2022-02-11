import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import UserFeed from '../UserFeed';

function User() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return (

      <div className='ud-feed-container'>
        <div className='ud-center-div'>
          <UserFeed />
        </div>
      </div>
    );
  } else {
    return <Redirect to='/' />;
  }
}

export default User;
