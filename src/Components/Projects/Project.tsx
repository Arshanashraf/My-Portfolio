import "./Project.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import proimg1 from '../../assets/Images/aboutPics/slider1.png'
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>

          <Col lg="4">
              <Card className="card1">
                <Card.Img variant="top" src={proimg1} />
                <Card.Body>
                  <Card.Title className="title">Car Store</Card.Title>
                  <Card.Text className="text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>

          <Col lg="4">
              <Card className="card1">
                <Card.Img variant="top" src={proimg1} />
                <Card.Body>
                  <Card.Title className="title">Car Store</Card.Title>
                  <Card.Text className="text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
