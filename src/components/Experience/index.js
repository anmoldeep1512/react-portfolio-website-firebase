import React, { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import "./index.scss"

function Experience() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    return (
      <>
        <div className="container experience-page">
          <div className="text-zone" style={{top:"30%"}}>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                idx={15}
              />
            </h1>
            </div>
            <div className="experience-list">
            <VerticalTimeline lineColor="#3e497a">
  
        <VerticalTimelineElement
          contentStyle={{ color: '#fff' }}
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >

          <h3 className="vertical-timeline-element-title" style={{color: "black"}}>
            Gobindgarh Public School, Mandi Gobindgarh, Punjab
          </h3>
          <p style={{color: "black"}}> High School Diploma</p>
          <p style={{color: "black"}}> 94.2% in Non Medical </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ color: '#fff' }}
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{color: "black"}}>
            Guru Nanak Dev University, Amritsar, Punjab
          </h3>

          <h4 className="vertical-timeline-element-subtitle" style={{color: "black"}}>
            Bachelor's Degree
          </h4>

          <p style={{color: "black"}}> Computer Science and Engineering</p>
          <p style={{color: "black"}}> 8.74 GPA </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ color: '#fff' }}
          className="vertical-timeline-element--work"
          date="January 2022 - February 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{color: "black"}}>
           Software Engineer Trainee - Newgen Software
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{color: "black"}}>
            Noida, India
          </h4>
          <p style={{color: "black"}}> Designing and developing the complete process flow of applications. </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ color: '#fff' }}
          className="vertical-timeline-element--work"
          date=" March 2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{color: "black"}}>
            Software Engineer Associate - HashedIn
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{color: "black"}}>
            Bangalore, India
          </h4>
          <p style={{color: "black"}}>
          Internship including a 2 months training program which includes working 
          on various technologies like React, Typescript, Java, Spring, etc. and 
          deploying mini projects every week using CI/CD tools. Lead a team of 4 
          and built training project Park Ride.

          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Experience