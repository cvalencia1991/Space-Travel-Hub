import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../imgs/planet.png';

function NavbarSpace() {
  return (
    <Navbar className="p-4">
      <Container>
        <Navbar.Brand className="d-flex align-items-center" href="/">
          <img
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Space Travel Hublogo"
          />
          <h1 className="d-inline ms-2">Space Traveler&apos;s Hub</h1>
        </Navbar.Brand>
        <ul className="d-flex p-0 gap-3 navigation" style={{ listStyle: 'none' }}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Missions"
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            >
              Missions
            </NavLink>
          </li>
          |
          <li>
            <NavLink
              to="/myProfile"
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
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
