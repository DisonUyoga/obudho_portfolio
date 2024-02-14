import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/final.png'
// import Logo from './Logo'
import './index.scss'
import Cube from '../Cube'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ','D','i', 's', 'o', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    '/',
    'm',
    'o',
    'b',
    'i',
    'l',
    'e',
    ' '
    
    
    
  
    
  ]
  const devArray = [
    'a',
    'p',
    'p',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            /><br/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={devArray}
              idx={32}
            />
          </h1>
          <h2>Front/Back End Developer / JavaScript & Python Expert / Data Analyst</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Link to="/portfolio" className="flat-button">
            VIEW PROFILE
          </Link>
        </div>
        <Cube/>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
