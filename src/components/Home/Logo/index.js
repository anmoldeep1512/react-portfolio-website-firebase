import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 27,
      })
    
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />



      <svg 
        width="700pt"
        height="925pt"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 2301.75 2309.6">
  
        <g
          className="svg-container"
          transform="translate(-55 232) scale(2.3 2.3)"
          fill="none"
        >
  
  <path ref={outlineLogoRef} d="M396.39,2.5L54.39,942.5M344.4,.5h312.03M340.39,4.5L4.39,940.5m-3.89,0H280.53m73.86-202l-72,198m72-194l340-12m4-2l62,214m-61.98-3h290.01m-352.02-201l68,202M656.39,.5l332,934M490.39,282.5l94,286m-186.02,4h236.03m5.98-2l-120-396m0,2l-124,390"/>
</g>
</svg>

    </div>
  )
}

export default Logo
