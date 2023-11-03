import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkExperience = () => {
  return (
    <Container fluid className="work-experience-section">
      <h1 className="mt-5 mb-2" id="#contact">
        My Experience
      </h1>
      <p className="mb-5">
        I am a well skilled candidate who can work and work
      </p>
      <Row className="justify-content-md-center mt-3">
        <Col xs lg="8">
          <MDBContainer fluid className="py-5">
            <div className="main-timeline">
              <div className="timeline left">
                <MDBCard className="work-experience-card-custom">
                  <MDBCardBody className="p-4">
                    <h3>2021- Present</h3>
                    <h6 className="company-name">ClicknPay Investments</h6>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                      nec admodum perfecto mnesarchum,
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className="timeline right">
                <MDBCard className="work-experience-card-custom">
                  <MDBCardBody className="p-4">
                    <h3>2020 - 2021</h3>
                    <h6 className="company-name">ClicknPay Investments</h6>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                      nec admodum perfecto mnesarchum, vim ea
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className="timeline left">
                <MDBCard className="work-experience-card-custom">
                  <MDBCardBody className="p-4">
                    <h3>2019 - 2021</h3>
                    <h6 className="company-name">ClicknPay Investments</h6>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                      nec admodum perfecto mnesarchum,
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className="timeline right">
                <MDBCard className="work-experience-card-custom">
                  <MDBCardBody className="p-4">
                    <h3 className="years">2012</h3>
                    <h6 className="company-name">ClicknPay Investments</h6>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                      nec admodum perfecto mnesarchum, vim ea
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
