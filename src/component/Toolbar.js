import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Toolbar.css";

const Toolbar = ({ handleNavigation }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav bg-body-light">
      <Container>
        <Navbar.Brand className="nav-title" href="#home">
          Shazlyne
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              eventKey={0}
              onClick={() => handleNavigation("contact")}
              className="nav-links active-c">
              Profile
            </Nav.Link>

            <Nav.Link
              eventKey={2}
              onClick={() => handleNavigation("skills")}
              className="nav-links">
              Skills
            </Nav.Link>
            <Nav.Link
              eventKey={3}
              onClick={() => handleNavigation("experience")}
              className="nav-links">
              Experience
            </Nav.Link>
            <Nav.Link
              eventKey={4}
              onClick={() => handleNavigation("contact")}
              className="nav-links">
              Contact Details
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Toolbar;
