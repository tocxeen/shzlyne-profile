import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Motivation = () => {
  return (
    <Container className="motivation-section" fluid>
      <Row className="justify-content-md-center">
        <Col xs sm={12} lg={6} >
          <h1>My Achievement</h1>
          <p className="mot-text">
            I achieved a remarkable milestone in my professional career under the customer service! I successfully established a new customer service department from scratch, which did not exist before. By providing exceptional assistance and showing empathy towards customers, I was able to significantly increase the volume of customers we served. This not only attracted a large number of customers but also greatly benefited the organization. We consistently exceeded our daily targets set by stakeholders , leading to me getting a promotion to the role of Customer Service Supervisor as the company grew.
          </p>
        
        </Col>
      </Row>
    </Container>
  );
};

export default Motivation;
