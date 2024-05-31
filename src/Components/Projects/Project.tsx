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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          ratione! Omnis at voluptatem asperiores quidem nulla repudiandae culpa
          voluptas magnam error.
        </p>
      </div>
      <div className="projectCards">
        <Row>
          <Col lg="4">
            <div className="card">
              <Card >
                <Card.Img variant="top" src={proimg1} />
                <Card.Body>
                  <Card.Title  className="title">Car Store</Card.Title>
                  <Card.Text className="text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg="4">
            <div className="card">
              <Card >
                <Card.Img variant="top" src={proimg1} />
                <Card.Body>
                  <Card.Title className="title">Car Store</Card.Title>
                  <Card.Text className="text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg="4">
            <div className="card">
              <Card >
                <Card.Img variant="top" src={proimg1} />
                <Card.Body>
                  <Card.Title className="title">Car Store</Card.Title>
                  <Card.Text className="text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Project;
