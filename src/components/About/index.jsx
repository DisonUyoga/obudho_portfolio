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
            I am an expert in python, JavaScript, typescript and also familiar with groovy.I have a solid foundation in Reactjs, nextjs and Django Rest Framework. I am well aquinted with vuejs, nodejs, firebase and React Native. I have got handson experience with Reduxjs, boostrap, SWR,prisma, aws(EC2 and lambda), jenkins,docker, bulma, figma tailwind, sass, Machine Learning technologies(sklearn, tensorflow2, pandas, numpy and matplotlib) and the yahooFinancials python library. 
          </p>
          <p>
            To briefly describe myself, I am a self-taught developer with swift understanding of concepts within short time frames.
          </p>
        </div>

        <Cube/>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
