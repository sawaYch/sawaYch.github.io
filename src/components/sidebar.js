import React from 'react'
import './sidebar.css'
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdCube } from "react-icons/io";



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
  </div>
)


function closeSideBar(){
  document.getElementById("leftSideNav").style.width = "0";
}

export default SideBar