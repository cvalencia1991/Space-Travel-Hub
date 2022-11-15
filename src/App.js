import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarSpace from './Components/Navbar';
import './App.css';
import Myprofile from './Components/Myprofile';
import Rockets from './Components/Rockets';
import Missions from './Components/Missions';

function App() {
  return (
    <Router>
      <NavbarSpace />
      <Routes>
        <Route exact path="/" element={<Myprofile />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route exact path="/Missions" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;
