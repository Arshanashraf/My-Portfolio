import './Contact.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import flo1 from '../../assets/Images/skillslogos/html.webp'
import flo2 from '../../assets/Images/skillslogos/node.png'
import flo3 from '../../assets/Images/skillslogos/reactt.png'
import flo4 from '../../assets/Images/skillslogos/css.webp'

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <h1>Feel free to <span>Contact.</span></h1>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label className="name1">Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your name..." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className="name1">Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email..." />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridMessage">
          <Form.Label className="name1">Message</Form.Label>
          <Form.Control className="messageBox" placeholder="type your message here..." as="textarea" aria-label="With textarea" />
        </Form.Group>
      </Row>

      <Form.Group  className="checkBox mb-3" id="formGridCheckbox">
        <Form.Check  type="checkbox" label="Check me out" />
      </Form.Group>

      <Button className='btn' variant="primary" type="submit">
        Send
      </Button>
    </Form>
      </div>

      <div className="floatingpics">
        <div className="floatingImage1">
          <img src={flo1} alt="" />
        </div>
        <div className="floatingImage2">
          <img src={flo2} alt="" />
        </div>
        <div className="floatingImage3">
          <img src={flo3} alt="" />
        </div>
        <div className="floatingImage4">
          <img src={flo4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact
