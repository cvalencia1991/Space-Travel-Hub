import { React } from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <div className="rocket-list" style={{ padding: '4em' }}>
      { rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocketName={rocket.rocket_name}
          description={rocket.description}
          flickrImages={rocket.flickr_images}
        />
      ))}
    </div>
  );
};

export default Rockets;
