import React from 'react';
import './App.scss';
import Navigation from './components/Navigation.jsx';
import Intro from './components/Intro.jsx';
import Projects from './components/Projects.jsx';
import Technologies from './components/Technologies.jsx';
import {AiOutlineArrowUp} from 'react-icons/ai';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
  const style = {
    width: '40px',
    height: '40px',
    border: '2px solid #FFFFFF',
    borderRadius: '40px',
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    backgroundImage: 'linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const Ai = {
    transform: "scale(2)",
    color: "#fff"
  }
  const styleLink = {
    position: 'absolute',
    bottom: '0',
    right: '0'
  }
  return (
    <div className='all-wrap'>
      <a href="#home" style={styleLink}>
        <div className='navigate' style={style}>
          <AiOutlineArrowUp style={Ai} className="get-to-top-icon" />
        </div>
      </a>
      <Navigation />
      <Intro />
      <Projects />
      <Technologies />
      <About />
      <Footer />
    </div>
  )
}

export default App
