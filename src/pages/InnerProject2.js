import React, { useState } from 'react';
import './InnerProject2.css';
import DragonImg from '../Images/dragon2.jpg';
import Falcon9Img from '../Images/falcon 9-2.jpeg';
import FalconHeavyImg from '../Images/falcon heavy2.jpeg';
import StarshipImg from '../Images/starship2.jpeg';

// data about spacecrafts

const dragon = {
  img: DragonImg,
  title: 'Dragon',
  description:
    'Used to send cargo to International Space Station. Can be also utilized to send up to 7 passengers to orbit. ',
  specs:
    'Height: 8.1m; Diameter: 4m; Launch payload mass: 6000kg; Return payload mass: 3000kg; ',
};
const falcon9 = {
  img: Falcon9Img,
  title: 'Falcon 9',
  description:
    'Serves to send dragon cargo capsule or dragon passenger capsule to orbit. Also it can serve to send government and private satellites into orbit',
  specs:
    'Height: 70m; Diameter: 3.7m; Payload to LEO: 22,800kg; Payload to GTO: 8,300kg; Payload to Mars: 4,020kg',
};
const falconHeavy = {
  img: FalconHeavyImg,
  title: 'Falcon Heavy',
  description:
    'More powerful version of Falcon 9, makes the heavy duty jobs easier.',
  specs:
    'Height: 70m; Diameter: 12.2m; Payload to LEO: 63,800kg; Payload to GTO: 26,700kg; Payload to Mars: 16,800kg',
};
const starship = {
  img: StarshipImg,
  title: 'Starship',
  description: 'Will be used for Mars colonization.',
  specs: 'Height: 120m; Diameter: 9m; Payload capacity: 100+t',
};

// components with their props

function InnerProject2() {
  return (
    <div className='allrockets'>
      <Rocket
        img={dragon.img}
        title={dragon.title}
        description={dragon.description}
        specs={dragon.specs}
      />
      <Rocket
        img={falcon9.img}
        title={falcon9.title}
        description={falcon9.description}
        specs={falcon9.specs}
      />
      <Rocket
        img={falconHeavy.img}
        title={falconHeavy.title}
        description={falconHeavy.description}
        specs={falconHeavy.specs}
      />
      <Rocket
        img={starship.img}
        title={starship.title}
        description={starship.description}
        specs={starship.specs}
      />
    </div>
  );
}

// designing single component

const Rocket = ({ img, title, description, specs }) => {
  // descriptions begin with initial state of false
  const [showDescription, setShowDescription] = useState(false);

  // logic for the button
  const handleClick = () => setShowDescription(!showDescription);

  return (
    <div className='rocket'>
      <img className='rocket-img' src={img} alt='rocket' />
      <div className='rocket-info'>
        <div className='rocket-info-up'>
          <h1>{title}</h1>

          {/* if show description is false than show less, if true show more */}
          <button className='rocket-btn' onClick={handleClick}>
            {showDescription ? 'Read Less...' : 'Read More...'}
          </button>
        </div>
        <div className='desc-specs-container'>
          {showDescription ? (
            <p>
              <span>Description:</span> {description}
            </p>
          ) : (
            // by default show only portion of text
            <p>
              <span>Description:</span> {description.substring(0, 30)}...
            </p>
          )}
          {showDescription && (
            <p className='specs-container'>
              <span>Specs:</span> {specs}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InnerProject2;
