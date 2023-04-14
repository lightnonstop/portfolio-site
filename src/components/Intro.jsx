import React from 'react';
import proficPic from '../assets/profile-pic.jpg';
const Intro = () => {
  return (
    <section className='intro'>
        <div className='introduction'>
          <span className='pleasantry'>Hello, I'm Michael,</span>
          <span className='call-me'>frontend developer</span>
          <p>A C.E. student seeking to apply competent development skills with focus on collaboration, communication, and passion.</p>
          <a href="#about"><button>about Me</button></a>
        </div>
        <div className='ellipse'>
          <div className='el'>
            <div className='wrap-pic'>
              <img src={proficPic} />
              <div className='ellipse-sm'></div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Intro
