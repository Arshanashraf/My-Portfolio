import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/Images/aboutPics/slider1.png";
import './About.css'
const About = () => {
  return (
    <div>
      <div className="about">
        <Row>
          <Col lg="6">
            <div className="aboutContent">
            <h1>Personal <span>Overview</span></h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis odit doloribus modi cum sunt voluptatem vitae facere
              sed id ipsa blanditiis sint laboriosam ut, asperiores quia
              accusamus beatae soluta provident?
            </p>
            </div>
            
          </Col>
          <Col lg="6" md="12">
            <div className="slider">
              <Carousel className="carousel" fade>
                <Carousel.Item>
                  <img src={Slider1} />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Slider1} />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Slider1} />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
