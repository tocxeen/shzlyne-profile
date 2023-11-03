import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <Container className="contact" fluid>
      <h1 className="mt-6 mb-2" id="#contact">
        Contact Me
      </h1>
      <p className="mb-5">
        I am a well skilled candidate who can work and work
      </p>
      <Row className="justify-content-md-center mt-3">
        <Col xs lg="3">
          WhatsApp
        </Col>
        <Col xs lg="3">
          LinkedIn
        </Col>
        <Col xs lg="3">
          Git
        </Col>
        <Col xs lg="3">
          Git
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
