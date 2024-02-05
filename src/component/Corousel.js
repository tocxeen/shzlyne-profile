import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styles/Corousel.css";
import img1 from "../assets/corousel/shaz3.png";
import cv from "../assets/docs/ShazlyneVambeCV.pdf"

const Corousel = () => {
  const corouselData = [
    {
    
      body: "Experienced professional with diverse IT and customer service background, skilled in customer support, system administration, testing, MySQL, front-end, and project planning.",
      button: [{ name: "Contact Me" }, { name: "Resume" }],
      img: img1,
      id: "0",
    },

    {
   
      body: "Dedicated professional with technical expertise and customer-centric focus delivering high-quality solutions, excelling in fast-paced environments and embracing new IT challenges eagerly.",
      button: [{ name: "Contact Me" }, { name: "Resume" }],
      img: img1,
      id: "1",
    },
  ];

  const handleDownload = () => {
    const url = cv;

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ShazyleneVambe.pdf');

    // Simulate a click on the anchor to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <Container fluid className="container-corousel">
      <Carousel className="corousel">
        {corouselData.map((data) => (
          <Carousel.Item interval={5000} key={data.id}>
            <Row className="justify-content-md-center mt-2 mb-1">
              <Col xs sm={12} lg={4} className="text">
                <h4 className="title mb-3">{data.title}</h4>
                <h1 className="body">{data.body}</h1>
                {/* <h6 className="mt-3 mb-5">If it wasn’t backed-up, then it wasn’t important</h6> */}
                <Button className="btn-custom" size="lg" onClick={handleDownload}>
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
