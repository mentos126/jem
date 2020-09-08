import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import './AppLogo.scss'

function AppLogo() {
  const TLLetters = gsap.timeline();
  const logo = useRef(null);
  
  useEffect(() => {
    setTimeout(() => {
      TLLetters
        .from(logo.current.getElementsByClassName('strike'), {width: '0%', opacity: 0, duration: 0.7, ease: "power1.in"})
        .from(logo.current.getElementsByTagName('span'), {opacity:0, top: gsap.utils.wrap([100,-100]), stagger: 0.1, ease: "power2.out"})
        .set(logo.current.getElementsByClassName('strike'), {width: '100%'})
    }, 10)
  }, [TLLetters, logo])

  return (
    <div className="app-logo light-blue accent-3 red-text text-darken-2" ref={logo}>
      <div className="logo-row">
        <span>J</span>
        <span>E</span>
        <span>U</span>
        <span>N</span>
        <span>E</span>
        <span>S</span>
        <span> </span>
        <span>E</span>
        <span>S</span>
        <span>P</span>
        <span>O</span>
        <span>I</span>
        <span>R</span>
        <span>S</span>
        <div className="strike"></div>
      </div>
      <div className="logo-row">
        <span>M</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
        <span>A</span>
        <span>L</span>
        <span>B</span>
        <span>A</span>
        <span>N</span>
        <span>A</span>
        <span>I</span>
        <span>S</span>
        <div className="strike"></div>
      </div>  
    </div>    
  )
}

export default AppLogo
