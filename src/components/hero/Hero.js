import React from 'react'
import './Hero.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../assests/home.mp4'

function Hero() {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
          <source src={Video} type='video/mp4' />
      </video>
      <div className="overlay"></div>
      <div className="content">
          <h1>A Wide Variety Of Different Types
          Of Wood & Sizes</h1>
          <h2>Cut To Size Wood Get Custom Sizes</h2>
          <form className="form">
              <div>
                  <input type="text" placeholder='Search Wood Varieties' />
              </div>
              <div>
                  <button><AiOutlineSearch className='icon'/></button>
              </div>
          </form>
      </div>
    </div>
  )
}

export default Hero
