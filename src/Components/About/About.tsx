import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/Images/aboutPics/slider1.png";
import Slider2 from "../../assets/Images/aboutPics/slider2.jpg";
import Slider3 from "../../assets/Images/aboutPics/slider3.png";
import './About.css'
const About = () => {
  return (
    <div >
      <div  className="about" >
        <Row>
          <Col lg="6">
            <div className="aboutContent" >
            <h1 >Personal <span>Overview</span></h1>
            <p>
            Hello, I'm Arshan, a passionate and skilled Front-End Developer with a keen eye for design and a deep understanding of web technologies. My journey in web development has equipped me with the ability to create visually stunning and highly functional user interfaces.
            </p>
            </div>
            
          </Col>
          <Col lg="6" md="12" >
            <div className="slider">
              <Carousel className="carousel" fade>
                <Carousel.Item>
                  <img src={Slider1} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Slider2} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Slider3} />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
      <div id='work' className="separation1"></div>
    </div>
  );
};

export default About;
