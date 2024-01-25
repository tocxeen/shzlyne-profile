import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import "../styles/About.css";
import img from "../assets/corousel/shaz3.png";
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
                <td>Shazlyne  Vambe</td>
              </tr>
              <tr className="borderless-row">
                <th>Date of Birth</th>
                <td>07-02-1994</td>
              </tr>
              <tr className="borderless-row">
                <th>Phone Number</th>
                <td>+263 71 542 4386</td>
              </tr>
              <tr className="borderless-row">
                <th>Email</th>
                <td>vshazzy@gmail.com</td>
              </tr>
              <tr className="borderless-row">
                <th>LinkedIn</th>
                <td>https://www.linkedin.com/in/shazlyne-vambe-75ab7a150/</td>
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
