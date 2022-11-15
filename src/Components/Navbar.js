import { Navbar, Container } from 'react-bootstrap';
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
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarSpace;
