import React from 'react';
import { ReactVideo } from 'reactjs-media';
import Landing from '../videos/Landing.mp4';
import './InnerProject1.css';
import Countdown from '../components/Countdown';

function InnerProject1() {
  return (
    <div className='innerproject1'>
      <div className='video-container'>
        <ReactVideo className='react-video' src={Landing} />
      </div>
      <div className='countdown-container'>
        <Countdown />
      </div>
    </div>
  );
}

export default InnerProject1;
