import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styles/Corousel.css";
import img1 from "../assets/corousel/shaz3.png";

const Corousel = () => {
  const corouselData = [
    {
      title: "Hi",
      body: "An enthusiastic systems admin, the legend",
      button: [{ name: "Contact Me" }, { name: "Resume" }],
      img:img1,
      id: "0",
    },

    {
      title: "Hey",
      body: "Geckos are a group of usually small, usually ",
      button: [{ name: "Contact Me" }, { name: "Resume" }],
      img:img1,
      id: "1",
    },
  ];

  return (
    <Container fluid className="container-corousel">
      <Carousel className="corousel">
        {corouselData.map((data) => (
          <Carousel.Item interval={5000} key={data.id}>
            <Row className="justify-content-md-center mt-2 mb-1">
              <Col xs sm={12} lg={4} className="text">
                <h4 className="title mb-3">{data.title}</h4>
                <h1 className="body">{data.body}</h1>
                <h6 className="mt-3 mb-5">Here we go</h6>
                <Button className="btn-custom" size="lg">
                  Download Resume
                </Button>
              </Col>
              <Col xs className="d-none d-sm-block" lg={4}>
                <Image src={data.img} />
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Corousel;
