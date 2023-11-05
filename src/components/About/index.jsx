import { useEffect, useState } from 'react'
import {
  faVuejs,
  faCss3,
  faGitAlt,
  faHtml5,
  faSass,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Cube from '../Cube'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a thirsty and relentless frontend and backend developer adequately equipped with
            contemporary software technologies. I am in search of a well established IT company
            characterized with complex projects that will contribute to my carrier advancement and be part
            of a team ambitious to advance existing web and mobile technologies.
          </p>
          <p align="LEFT">
            I am armed with Reactjs, Vuejs and React Native for the Fronted. Django Rest Framework,
            Nodejs, Expressjs and firebase for the backend. However, Am much stronger with React Native,
            Reactjs and Django Rest Framework. I am also packed with other supplementary 'weapons' such as
            Reduxjs, boostrap, bulma, tailwind, sass, Machine Learning with python and moderately with CC photoshop for graphic design.
          </p>
          <p>
            To briefly describe myself, am a proud husband and a Dad to a cute daughter named Jordyn.
          </p>
        </div>

        <Cube/>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
