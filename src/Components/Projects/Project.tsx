import "./Project.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import proimg1 from '../../assets/Images/aboutPics/slider1.png'
import proimg2 from '../../assets/Images/aboutPics/slider2.jpg'
import proimg3 from '../../assets/Images/aboutPics/slider3.png'
const Project = () => {
  return (
    <div>
      <div className="projectContent">
        <h1>
          My portfolio includes these <span>Projects:</span>
        </h1>
        <p>
        My goal is to leverage my skills and experience to create engaging, high-performance web applications that provide an exceptional user experience. I am excited to work with forward-thinking companies where I can contribute to innovative projects and grow as a developer.
        </p>
      </div>
      <div className="projectCards">
        <Row>
          <Col lg="4">
              <Card className="card1">
                <Card.Img variant="top" src={proimg1} />
                <Card.Body>
                  <Card.Title  className="title">Car Store</Card.Title>
                  <Card.Text className="text">
                    In this web-based project, I utilized animations, a slider, and Bootstrap cards.
                    <p className="mb-4">#react #Bootstrap #htmlcss</p>
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>

          <Col lg="4">
              <Card className="card1">
                <Card.Img variant="top" src={proimg2} />
                <Card.Body>
                  <Card.Title className="title">Texts Web Clone</Card.Title>
                  <Card.Text className="text">
                  This web application clone is entirely based on parallax effects and animations.
                  <p>#react #parallax #animation #Bootstrap #htmlcss</p>
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>

          <Col lg="4">
              <Card className="card1">
                <Card.Img variant="top" src={proimg3} />
                <Card.Body>
                  <Card.Title className="title">Gym Web</Card.Title>
                  <Card.Text className="text">
                  This was my first creative web project and which is entirely based on Bootstrap .
                  <p className="mb-4"> #Bootstrap #html #css</p>
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Project;
