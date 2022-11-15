import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../imgs/planet.png';

function NavbarSpace() {
  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Space Travel Hublogo"
          />
        </Navbar.Brand>
        <ul className="d-flex p-0 gap-3">
          <li>
            <NavLink
              to="/rockets"
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Missions"
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default NavbarSpace;
