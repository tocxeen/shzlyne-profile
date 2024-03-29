import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";

const WorkExperience = () => {
  return (
    <Container fluid className="work-experience-section">

      <Row className="justify-content-md-center cmt-3 ">
        <Col xs lg="8">
          <h1 className="w-title mt-4">My Experience</h1>
          <p className="w-text">Customer-focused experience to collaborate effectively with software developers and in system administration, ensuring high-quality software delivery, effective project management, and robust system security while pursuing certifications to enhance my skills in software testing, project management, and system security</p>
        </Col>
      </Row>
      {/* <Header
        className="mb-5"
        header="My Experience"
        text=""
      /> */}

      <Row className="justify-content-md-center cmt-3">
        <Col xs lg="8">
          <MDBContainer fluid className="pb-5">
            <div className="main-timeline">
              <div className="timeline left">
                <MDBCard className="work-experience-card-custom">
                  <MDBCardBody className="p-4">
                    <h3 className="years">Feb 2021- Present</h3>
                    <h6 className="company-name">ClicknPay Investments</h6>
                    <p className="mb-0">
                      Systems Administrator & Customer Service Supervisor
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className="timeline right">
                <MDBCard className="work-experience-card-custom">
                  <MDBCardBody className="p-4">
                    <h3 className="years">Jan 2020 – Dec 2021</h3>
                    <h6 className="company-name">Entire Office system</h6>
                    <p className="mb-0">Graduate Trainee
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className="timeline left">
                <MDBCard className="work-experience-card-custom">
                  <MDBCardBody className="p-4">
                    <h3 className="years">Feb 2019 – Sept 2019</h3>
                    <h6 className="company-name">Muzinda Hub</h6>
                    <p className="mb-0">Project Coordinator
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className="timeline right">
                <MDBCard className="work-experience-card-custom">
                  <MDBCardBody className="p-4">
                    <h3 className="years">Sept 2019 – Jan 2020</h3>
                    <h6 className="company-name">Muzinda Hub</h6>
                    <p className="mb-0">Sasai translator - Language translated: Shona
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </MDBContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkExperience;
