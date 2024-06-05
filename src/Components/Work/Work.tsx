import './Work.css'
import Plx from "react-plx";
import mylogo from '../../assets/Images/logo.png'
import l1 from '../../assets/Images/skillslogos/html.webp'
import l2 from '../../assets/Images/skillslogos/typescript.png'
import l3 from '../../assets/Images/skillslogos/npm logo.webp'
import l4 from '../../assets/Images/skillslogos/java.png'
import l5 from '../../assets/Images/skillslogos/reactt.png'
import l6 from '../../assets/Images/skillslogos/bootlogo.png'
import l7 from '../../assets/Images/skillslogos/css.webp'
import l8 from '../../assets/Images/skillslogos/node.png'
import l9 from '../../assets/Images/skillslogos/git.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Work = () => {
  return (
    <div className='work'>
      <div className="workContent">
        <h1>Offering insights from <span>Experience</span></h1>
        <p>Passionate about design and innovation, always looking for ways to improve and create better user experiences. </p>
      </div>

      {/* ---------parallax effect-------------------- */}
      <div className="skills">
        <div className="mylogo">
        <Plx
            parallaxData={[
              {
                start: 550,
                end: "self",
                properties: [
                  {
                    startValue: 0.8,
                    endValue: 1.2,
                    property: "scale",
                  },
                  {
                    startValue: 100,
                    endValue: -150,
                    property: "translateY",
                  },
                ],
              },
            ]}
          >
            <img src={mylogo} />
          </Plx>
        </div>
        <div className="skillLogos html">
        <Plx
            parallaxData={[
              {
                start: 400,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 350,
                    property: "translateY",
                  },
                  {
                    startValue: 0,
                    endValue: 600,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 360,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={l1} />
          </Plx> 
        </div>

        <div className="skillLogos typescript">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 300,
                    property: "translateY",
                  },
                  {
                    startValue: 0,
                    endValue: 600,
                    property: "translateX",
                  },
                  {
                    startValue: 1.3,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 360,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={l2} />
          </Plx>
          </div>
          <div className="skillLogos npm">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 300,
                    property: "translateY",
                  },
                  {
                    startValue: 0,
                    endValue: 315,
                    property: "translateX",
                  },
                  {
                    startValue: 1.3,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 360,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={l3} />
          </Plx>
          </div>
          
          <div className="skillLogos java">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 380,
                    property: "translateY",
                  },
                  {
                    startValue: 0,
                    endValue:100,
                    property: "translateX",
                  },
                  {
                    startValue: 1.3,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 360,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={l4} />
          </Plx>
          </div>
          
          <div className="skillLogos react">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 350,
                    property: "translateY",
                  },
                  {
                    startValue: 150,
                    endValue: 0,
                    property: "translateX",
                  },
                  {
                    startValue: 1.3,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 360,
                    endValue: 0,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={l5} />
          </Plx>
          </div>
          
          <div className="skillLogos boot">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 350,
                    property: "translateY",
                  },
                  {
                    startValue: 300,
                    endValue: 0,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 0,
                    endValue: 360,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={l6} />
          </Plx>
          </div>
          
          <div className="skillLogos css">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 340,
                    property: "translateY",
                  },
                  {
                    startValue: 470,
                    endValue: 0,
                    property: "translateX",
                  },
                  {
                    startValue: 1.3,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 360,
                    endValue: 0,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={l7} />
          </Plx>
          </div>
          
          <div className="skillLogos node">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 250,
                    property: "translateY",
                  },
                  {
                    startValue: 500,
                    endValue: 0,
                    property: "translateX",
                  },
                  {
                    startValue: 1.3,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 360,
                    endValue: 0,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={l8} />
          </Plx>
          </div>

          <div className="skillLogos git">
          <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 400,
                    property: "translateY",
                  },
                  {
                    startValue: 540,
                    endValue: 0,
                    property: "translateX",
                  },
                  {
                    startValue: 1.5,
                    endValue: 1,
                    property: "scale",
                  },
                  {
                    startValue: 360,
                    endValue: 0,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={l9} />
          </Plx>
          </div>
      </div>
      {/* -------end---------- */}

      <div className="allskills">
        <Row>
          <Col lg="2" md="2" sm="3" xs="4">
          <div className="allskilllogos">
          <img src={l1} alt="" />
          </div>
            
          </Col>
          <Col lg="2" md="2" sm="3" xs="4">
          <div className="allskilllogos">
          <img src={l2} alt="" />
          </div>
            
          </Col>
          <Col lg="2" md="2" sm="3" xs="4">
          <div className="allskilllogos">
          <img src={l3} alt="" />
          </div>
            
          </Col>
          <Col lg="2" md="2" sm="3" xs="4">
          <div className="allskilllogos">
          <img src={l4} alt="" />
          </div>
            
          </Col>
          <Col lg="2" md="2" sm="3" xs="4">
          <div className="allskilllogos">
          <img src={l5} alt="" />
          </div>
            
          </Col>

          {/* <Col lg="2" md="2" sm="3" xs="4">
          <div className="allskilllogos">
          
          </div>
            
          </Col> */}

          <Col lg="2" md="2" sm="3" xs="4">
          <div className="allskilllogos  ">
          <img src={l6} alt="" />
          </div>
            
          </Col>
          <Col lg="2" md="2" sm="3" xs="4">
          <div className="allskilllogos allskilllogos1 css1">
          <img src={l7} alt="" />
          </div>
            
          </Col>
          <Col lg="2" md="2" sm="3" xs="4">
          <div className="allskilllogos allskilllogos1">
          <img src={l8} alt="" />
          </div>
            
          </Col>
          <Col lg="2" md="2" sm="3" xs="4">
          <div className="allskilllogos allskilllogos1 git1">
          <img src={l9} alt="" />
          </div>
            
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Work
