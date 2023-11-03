import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Toolbar.css";

const Toolbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        <Navbar.Brand className="nav-title" href="#home">
          Richard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={0} className="nav-links" href="#profile">
              Profile
            </Nav.Link>
            <Nav.Link eventKey={1} className="nav-links" href="#about-us">
              About
            </Nav.Link>
            <Nav.Link eventKey={2} className="nav-links" href="#about-us">
              Resume
            </Nav.Link>
            <Nav.Link eventKey={3} className="nav-links" href="#about-us">
              Projects
            </Nav.Link>
            <Nav.Link eventKey={4} className="nav-links" href="#contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Toolbar;
