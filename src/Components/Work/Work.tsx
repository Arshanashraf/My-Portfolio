import './Work.css'
import Plx from "react-plx";
import mylogo from '../../assets/Images/logo.png'
import l1 from '../../assets/Images/skillslogos/html.webp'
const Work = () => {
  return (
    <div className='work'>
      <div className="workContent">
        <h1>Offering insights from <span>Experience</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In reprehenderit deleniti dolores aut dolorem officiis ducimus </p>
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
        <div className="skillLogos">
        <Plx
            parallaxData={[
              {
                start: 450,
                end: 1200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 200,
                    property: "translateY",
                  },
                  {
                    startValue: 0,
                    endValue: 450,
                    property: "translateX",
                  },
                //   {
                //     startValue: 1.5,
                //     endValue: 1,
                //     property: "scale",
                //   },
                  {
                    startValue: 0,
                    endValue: 50,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img src={l1} />
          </Plx> 
        </div>
      </div>
      <h1>projects</h1>
      <h1>projects</h1>
      <h1>projects</h1>
      <h1>projects</h1>
      <h1>projects</h1>
      <h1>projects</h1>
      <h1>projects</h1>
      <h1>projects</h1>
      <h1>projects</h1>
    </div>
  )
}

export default Work
