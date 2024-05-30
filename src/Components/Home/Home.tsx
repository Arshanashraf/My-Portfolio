import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Propic from '../../assets/Images/pro4.png'
import Gear1 from '../../assets/Images/gear.png'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <Row className='intro'>
        <Col lg="6" md="12">
            <div className='myIntro'>
                <h1>Greetings, I'm  <span className='name'> M.Arshan Ashraf</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis nostrum totam vel, molestiae in voluptate maxime, illo minima hic fuga dignissimos inventore est odio? Nesciunt aperiam soluta dolorum dolor.</p>
                <button>Download Resume</button>
            </div>
        </Col>
        <Col lg="6" md="12">
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
    </div>
  )
}

export default Home
