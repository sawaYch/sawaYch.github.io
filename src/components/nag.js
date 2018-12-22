import React from 'react'
import { CSSTransition, transit } from "react-css-transition";
import './nag.css'


const Nag = () => (
  <div className='navbox'>
    <div className='avator' />
    <div className='gh_name'>
      <span className='curlyb'>{'{'}</span>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/sawaYch'
      >
        sawaYch
      </a>
      <span className='curlyb'>{'}'}</span>
    </div>
    <div className='name'>Sawa.Y</div>
    <div className='twcontainer'>
      <div className='typewriter'>
        <h1>Penguin and the man.</h1>
      </div>
    </div>
  </div>
)

export default Nag
