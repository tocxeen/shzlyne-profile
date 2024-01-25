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
              <Card.Text>Managing and administering MySQL databases, ensuring efficient storage and reporting on products performances </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="4">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>Jira </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Projects tracking</Card.Subtitle>
              <Card.Text>for tracking and organizing tasks, issues, and project workflows</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col xs lg="4">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>Linux</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">environment</Card.Subtitle>
              <Card.Text>Working with Linux operating systems, including server administration, system configuration, and troubleshooting.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="4">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>CONFLUENCE </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">manager</Card.Subtitle>
              <Card.Text> creating and managing documentation, knowledge bases, and team communication</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col xs lg="4">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>Training Planning</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">planner</Card.Subtitle>
              <Card.Text>creating test strategies, defining test cases, and coordinating testing efforts to ensure software quality</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="4">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>Front-end programming </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">developer</Card.Subtitle>
              <Card.Text>Utilizing front-end programming skills to develop user interfaces, web applications, or interactive features using languages like HTML, CSS, and JavaScript</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
