/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavbarSpace from './Components/Navbar';
import './App.css';
import Myprofile from './Components/Myprofile';
import Rockets from './Components/Rockets';
import Missions from './Components/Missions';
import { getRockets } from './Redux/Rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
   /*  dispatch(getMissions()); */
  }, []);

  return (
    <Router>
      <NavbarSpace />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/myProfile" element={<Myprofile />} />
        <Route exact path="/Missions" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;
