/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, Provider } from 'react-redux';
import NavbarSpace from './Components/Navbar';
import './App.css';
import Myprofile from './Components/Myprofile';
import Rockets from './Components/Rockets';
import Missions from './Components/Missions';
import store from './Redux/configureStore';
import { getRockets } from './Redux/Rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <NavbarSpace />
        <Routes>
          <Route exact path="/" element={<Myprofile />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route exact path="/Missions" element={<Missions />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
