import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styles/Corousel.css";
import img from "../assets/corousel/richard.png";

const Corousel = () => {
  const corouselData = [
    {
      title: "Richard",
      body: "Geckos are a group of usually small, usually nocturnal lizards.They are found on every continent except Antarctica",
      button: [{ name: "Contact Me" }, { name: "Resume" }],
      id: "0",
    },

    {
      title: "Hey",
      body: "Geckos are a group of usually small, usually nocturnal lizards.They are found on every continent except Antarctica",
      button: [{ name: "Contact Me" }, { name: "Resume" }],
      id: "1",
    },
  ];

  return (
    <Container fluid className="container-corousel">
      <Carousel className="corousel">
        {corouselData.map((data) => (
          <Carousel.Item interval={5000} key={data.id}>
            <Row className="justify-content-md-center mt-2 mb-1">
              <Col xs lg="4" className="text">
                <h1 className="mb-3">{data.title}</h1>
                <p>{data.body}</p>
                <h6 className="mt-1 mb-3">Here we go</h6>
                <Button variant="outline-dark" size="md">
                  Resume
                </Button>{" "}
                <Button variant="outline-dark" size="md">
                  My CV
                </Button>
              </Col>
              <Col xs lg="3">
                <Image src={img} roundedCircle />
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Corousel;
