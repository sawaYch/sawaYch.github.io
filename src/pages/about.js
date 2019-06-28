import React from 'react'
import SideBar from '../components/sidebar'
import '../components/about.css'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import {Radar} from 'react-chartjs-2';
import LazyLoad from 'react-lazyload';
import Layout from '../components/layout'
import { FaGithubAlt } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const data = {
  labels: ['Embedded System', 'FrontEnd', 'BackEnd', 'Language', 'Algorithm'],
  datasets: [
    {
      label: 'Skill Points',
      backgroundColor: 'rgb(56,130,232, 0.3)',
      borderColor: 'rgb(56,130,232)',
      pointBackgroundColor: 'rgb(56,130,232)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(56,130,232)',
      data: [6, 8, 5, 7, 5]
    }
  ]
};


const AboutPage = () => (
  <div>
    <PageTransition
      defaultStyle={{
        transition: 'top 1000ms cubic-bezier(0.785, 0.135, 0.150, 0.860)',
        top: '100%',
        position: 'absolute',
        width: '100%',
      }}
      transitionStyles={{
        entering: { top: '0%' },
        entered: { top: '0%' },
        exiting: { top: '100%' },
        exited: { top: '100%' },
      }}
      transitionTime={500}
      >
      <Layout>
        <div className='container'>
          <div className='aboutTopBanner' />
          <h2 className='abttopic'><center>Something About Me</center></h2>
          <div className='doc'>
            <p className='greeting'> 
            Hello! my name is Sawa. 
            </p>
            <p className='bluebox'>
            I am a Computer Science Student from Hong Kong. <br/>
            Love to combine technology with creative ideas.<br/>
            Currently doing my bachelor degree in The Hong Kong University of Science and Technology. <br/>
            I am slightly obsessed with algorithm & CTF. <br/>
            Also with background in Network and System Administration (and I love Linux 😎),  and I know a little bit about Robotics and Embedded System.
            </p>
            <p className='emailbox'>
              <a       
                href='mailto:chyeungam@connect.ust.hk'
              >
                  <FaMailBulk color={'white'} size={'3vh'} />
              </a>
              <span className="email">&nbsp; chyeungam@connect.ust.hk</span>
            </p>
            <p className='emailbox'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/sawaYch'
              >
              <FaGithubAlt color={'white'} size={'3vh'} />
              </a>
              <span className="email">&nbsp; sawaYch</span>
            </p>

            <p className='emailbox'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facebook.com/Chak.Yeung.93'
            >
                <FaFacebookF color={'white'} size={'3vh'} />
            </a>
            </p>
            
          </div>
          
          <h2 className='abttopic'><center>Skills</center></h2>
          <LazyLoad height={'50vh'}>
            <div className='chartBox'>
              <Radar data={data}
                options={{
                  maintainAspectRatio: false,
                  legend: {display: false},
                  scale: {
                    ticks: {
                      beginAtZero: true,
                      max: 10,
                      display: false,
                      maxTicksLimit: 4
                    },                  
                  }
                }}
                />
            </div>
          </LazyLoad>
          <h2 className='abttopic'><center>Experiences</center></h2>
          <div className='listtype2'>
            <ul>
              <li><a>2018 HKUST Robotics Team Member - Robocon (War Dragon)</a></li>
              <li><a>2017 Inter-Tertiary-Institute Capture the Flag (CTF) contest ASTRI x iChunQiu</a></li>
              <li><a>2016 Microsoft Azure Training Program - Cloud Admin & Apps on Cloud Platform</a></li>
            </ul>
          </div>
         <div className='aboutback'>
            <Link to='/'>
              <IoIosArrowDropleftCircle size={'7vh'} />
            </Link>
          </div>
        </div>
      </Layout>
    </PageTransition>
    <SideBar />    
  </div>
)



export default AboutPage
