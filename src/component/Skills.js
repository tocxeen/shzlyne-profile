import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Skills = () => {
  return (
    <Container className="skills-section">
      <h1 className="mt-6 mb-2">Skills</h1>
      <p className="mb-5">
        I am a well skilled candidate who can work and work
      </p>
      <Row className="justify-content-md-center mt-3">
        <Col xs lg="4">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>MySQL Database</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">manager</Card.Subtitle>
              <Card.Text>Setup, run structured queries and so on</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="4">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>Mongo Database </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">manager</Card.Subtitle>
              <Card.Text>Some quick example text to build on the</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col xs lg="4">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>MySQL Database</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">manager</Card.Subtitle>
              <Card.Text>Setup, run structured queries and so on</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="4">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>Mongo Database </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">manager</Card.Subtitle>
              <Card.Text>Some quick example text to build on the</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col xs lg="4">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>MySQL Database</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">manager</Card.Subtitle>
              <Card.Text>Setup, run structured queries and so on</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="4">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>Mongo Database </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">manager</Card.Subtitle>
              <Card.Text>Some quick example text to build on the</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
