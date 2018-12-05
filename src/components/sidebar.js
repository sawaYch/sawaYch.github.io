import React from 'react'
import './sidebar.css'
import { IoIosCloseCircle, IoMdCube, IoIosJournal } from "react-icons/io";
import { GoPerson } from "react-icons/go";


const cubeStyle = {
  color: "orange",
  left: "10px"
};

const SideBar = () => (
  <div id='leftSideNav' className='sidenav'>
    <a href='javascript:void(0)' className='closebtn' onClick={closeSideBar}>
      <IoIosCloseCircle  size={32} />
    </a>
    <a className='cubeItem' href='#'>
      <IoMdCube size={32} style={cubeStyle} />
    </a>
    <a className='aboutItem' href='#'>
      <GoPerson size={32} />
    </a>
    <a className='articleItem' href='#'>
      <IoIosJournal size={32} />
    </a>
    
  </div>
)


function closeSideBar(){
  document.getElementById("leftSideNav").style.width = "0";
}

export default SideBar