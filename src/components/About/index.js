import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faJava,
  faLinux
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
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
          I recently graduated from Guru Nanak Dev University with a B.Tech. 
          in computer science and engineering. While there, I learned a lot
          in subjects like data structures, algorithms, operating systems, 
          and more. I maintained a GPA of 8.74.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and constantly working on
            improving my skills.
          </p>
          <p>Link to my resume: <a href="https://drive.google.com/file/d/1uF5yO_J0k0h4MpX_d7R--bTiw4t3Qzlx/view?usp=sharing">Resume</a></p>
          <h3>Front-end skills</h3>
          <p >ReactJS, HTML, CS, NPM, BootStrap, MaterialUI, StyledComponents</p>

          <h3>Back-end skills</h3>
          <p>Java Spring, .NET, MySQL, MongoDB</p>
          
          <h3>Languages</h3>
          <p>Python, JavaScript, Java</p>

        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
          
            <div className="face3">
              <FontAwesomeIcon icon={faLinux} color="black" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
