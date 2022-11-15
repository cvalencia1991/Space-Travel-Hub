import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarSpace from './Components/Navbar';
import './App.css';
import Myprofile from './Components/Myprofile';

function App() {
  return (
    <Router>
      <NavbarSpace />
      <Routes>
        <Route exact path="/" element={<Myprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
