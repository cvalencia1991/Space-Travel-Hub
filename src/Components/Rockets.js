import { React } from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <div>Rockets</div>
  );
};

export default Rockets;
