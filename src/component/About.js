import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import "../styles/About.css";
import img from "../assets/corousel/richard.png";
import Image from "react-bootstrap/Image";

const About = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Shazlyne's detailed CV
    </Tooltip>
  );

  return (
    <Container>
      <Row className="mt-5 pb-5">
        <Col xl lg="4">
          <Image src={img} fluid />
        </Col>
        <Col xl lg="4">
          <h2 className="head">About Me</h2>
          <Table className="table-border">
            <tbody>
              <tr className="borderless-row">
                <th>Name</th>
                <td>Mark Angel</td>
              </tr>
              <tr className="borderless-row">
                <th>Date of Birth</th>
                <td>20-1990</td>
              </tr>
              <tr className="borderless-row">
                <th>Phone Number</th>
                <td>0782428177</td>
              </tr>
              <tr className="borderless-row">
                <th>Email</th>
                <td>email@email.com</td>
              </tr>
              <tr className="borderless-row">
                <th>LinkedIn</th>
                <td>www.linkedin.com</td>
              </tr>
            </tbody>
          </Table>
          {/* <Button className="btn-custom" size="lg">
            Download Resume
          </Button> */}

          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}>
            <Button className="btn-custom" size="lg">
              Download Resume
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
