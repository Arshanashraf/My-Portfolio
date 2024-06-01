import './Footer.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import foologo from '../../assets/Images/logo.png'
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Row>
          <Col lg="5">
            <div className="footerHeading">
              <div className="footerlogo"><img src={foologo} alt="" />Arshan<span>Dev</span></div>
              <div className="foopara">
                <p>"Architects of the digital realm, shaping dreams into reality, one keystroke at a time."</p>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="foolist">
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </Col>
          <Col lg="4">
            <div className="fooicons">
            <div className="iconhead">Follow me</div>
            <div className="iconlogos">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            </div>
            
            
          </Col>
        </Row>
        <div className="copyrightpara">
                <p>&copy; 2024 ArshanDev. All rights reserved</p>
              </div>
      </div>
    </div>
  )
}

export default Footer
