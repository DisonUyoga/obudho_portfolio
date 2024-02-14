
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faCss3, 
  faGitAlt, 
  faDocker,
  faJenkins,
  faHtml5, 
  faNodeJs,
  faFigma,
  faReact, 
  faAws,
  faSass, 
  faVuejs} from '@fortawesome/free-brands-svg-icons'

const Cube = () => {
  return (
    <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJenkins} color="#008000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faFigma} color="#EC4D28" />
            </div>
          </div>
        </div>
  );
}

export default Cube;
