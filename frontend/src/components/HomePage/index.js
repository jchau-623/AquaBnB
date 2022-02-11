import Home from '../HomeFeed';
import Footer from '../Footer/index';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import './HomePage.css';
import MainImage from './MainImage';

function Homepage() {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return <Redirect to='/username' />;
  } else {
    return (
      <>
      <MainImage />
        <div id='aboutDiv'>
          <p id='about'>Dive into these underwater cities!</p>
        </div>
        <div id='main'>
          <Home />
        </div>
        <Footer />
      </>
    );
  }
}

export default Homepage;
