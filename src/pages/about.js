import React from 'react'
import SideBar from '../components/sidebar'
import '../components/about.css'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';
import { IoIosArrowDropleftCircle } from "react-icons/io";


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
      <div className='container'>
        <h2><center>Something About Me</center></h2>
        <div className='doc'>
          <p className='part1'> 
            Hi ! I'm Sawa, a Computer Science Engineering Student from Hong Kong. 
            Love to combine technology with creative ideas. 
          </p>
          <p className='part2'>
            I'm currently doing my bachelor degree in The Hong Kong University of Science and 
            Technology. I am slightly obsessed with algorithm & CTF. Also with background in
            Network and System Administration (and I love Linux 😎) 
          </p>
          <p className='part2'>
            Furthermore, I know a little bit about Robotics and Embedded System.
            When I’m not coding, I enjoy reading manga, watching anime and playing console games 😀
          </p>
        </div>
        <h2><center>Skills</center></h2>
        <ul>
          <li>Language: HTML5, CSS3, Javascript, ES5, PHP, SQL, LaTex, Lua, C, C++, C#, Java, Python, Visual Basic, Delphi(Pascal)</li>
          <li>Framework: GatsbyJs, Jekyll, ReactJs, Flask, CodeIgniter</li>
          <li>Tools: Debian & Arch-branch Linux, Git, Bash, Docker, Qt, Gtk, WPF, WordPress CMS</li>
        </ul>
        <h2><center>Experiences</center></h2>
        <ul>
          <li>2017-2018 HKUST Robotics Team Member - Robocon (War Dragon)</li>
          <li>2017 Inter-Tertiary-Institute Capture the Flag (CTF) contest ASTRI x iChunQiu</li>
          <li>2016 Microsoft Azure Training Program - Cloud Admin & Apps on Cloud Platform</li>
        </ul>

        <div className='aboutback'>
          <Link to='/'>
            <IoIosArrowDropleftCircle size={'7vh'} />
          </Link>
        </div>
      </div>
    </PageTransition>
    <SideBar />
  </div>
)

export default AboutPage