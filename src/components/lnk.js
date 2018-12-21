import React from 'react'
import './lnk.css'
import { FaGithubAlt } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { FaRss } from 'react-icons/fa'
import { FaPlaystation } from 'react-icons/fa'
import { Animated } from 'react-animated-css'

const Lnk = () => (
  <span className='menubox'>
    <Animated
      className='menuItemFirst'
      animationIn='bounceInUp'
      animationOut='fadeOut'
      isVisible
    >
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/sawaYch'
      >
        <div className='child'>
          <FaGithubAlt size={'5vh'} />
        </div>
      </a>
    </Animated>
    <Animated
      className='menuItem'
      animationIn='bounceInUp'
      animationOut='fadeOut'
      isVisible
    >
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.facebook.com/Chak.Yeung.93'
      >
        <div className='child'>
          <FaFacebookF size={'5vh'} />
        </div>
      </a>
    </Animated>
    <Animated
      className='menuItem'
      animationIn='bounceInUp'
      animationOut='fadeOut'
      isVisible
    >
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://my.playstation.com/profile/HKGSawa'
      >
        <div className='child'>
          <FaPlaystation size={'5vh'} />
        </div>
      </a>
    </Animated>
    <Animated
      className='menuItem'
      animationIn='bounceInUp'
      animationOut='fadeOut'
      isVisible
    >
      <a       
        href='mailto:chyeungam@connect.ust.hk'
      >
        <div className='child'>
          <FaMailBulk size={'5vh'} />
        </div>
      </a>
    </Animated>
    <Animated
      className='menuItem'
      animationIn='bounceInUp'
      animationOut='fadeOut'
      isVisible
    >
      <div className='child'>
        <FaRss size={'5vh'} />
      </div>
    </Animated>
  </span>
)

export default Lnk
