import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarSpace from './Components/Navbar';
import './App.css';
import Myprofile from './Components/Myprofile';
import Rockets from './Components/Rockets';

function App() {
  return (
    <Router>
      <NavbarSpace />
      <Routes>
        <Route exact path="/" element={<Myprofile />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </Router>
  );
}

export default App;
