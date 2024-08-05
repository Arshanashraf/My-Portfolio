import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Propic from '../../assets/Images/laptop.png'
import Gear1 from '../../assets/Images/gear.png'
import './Home.css'
const Home = () => {
  return (
    <>
    <div id='home' className='home'>
      
      <Row className='intro'>
        <Col lg="6" md="12">
            <div className='myIntro'>
                <h1>Greetings, I'm  <span className='name'>M.Arshan Ashraf</span></h1>
                <p>"Architects of the digital realm, shaping dreams into reality, one keystroke at a time."</p>
                
                <button >Download Resume</button>
            </div>
        </Col>
        <Col lg="6" md="12" >
            <div className="mypic">
                <img src={Propic} alt="" />
            </div>
            <div className="gear1">
              <img src={Gear1} alt="" />
            </div>
            <div className="gear2">
            <img src={Gear1} alt="" />
            </div>
        </Col>
      </Row>
      <div id="about" className="separation" ></div>
      
    </div > 
    </>
  )
}

export default Home
