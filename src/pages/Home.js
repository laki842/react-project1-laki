import React from 'react';
import './Home.css';
import Mars from '../videos/Mars.mp4';

function Home() {
  return (
    <div>
      <div className='home'>
        <div className='home-wrapper'>
          <h1>Mars colonization</h1>
          <p>I Could Either Watch It Happen Or Be A Part Of It.</p>
          <h1>-Elon Musk</h1>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-gif'>
          <video src={Mars} type='video/mp4' autoPlay loop muted></video>
        </div>
        <h4>Copyright &copy; 2021 Laki Production's. All Rights Reserved</h4>
      </div>
    </div>
  );
}

export default Home;
