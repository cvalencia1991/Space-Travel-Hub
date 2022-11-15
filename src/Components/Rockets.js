import { React } from 'react';
import { useSelector } from 'react-redux';


const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <div className="rocket-list">
      { rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          title={rocket.title}
          description={rocket.description}
          id={rocket.id}
        />
      ))}
    </div>
  );
};

export default Rockets;
