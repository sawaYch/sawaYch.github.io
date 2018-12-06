import React from 'react'
import './sidebar.css'
import { IoIosCloseCircle, IoMdCube, IoIosJournal, IoMdMore } from "react-icons/io";
import { GoPerson } from "react-icons/go";

// const cubeStyle = {
//   color: "orange",
//   left: "10px"
// };

const svgShadowDrop = {
  // filter: 'drop-shadow( 1px 1px 2px #00ff00 )'
};

const SideBar = () => (
  <SideNav />
)


class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.closeSideBar();
    }
  }

  handleKeyPress(event) {
    console.log(event)
    if(event.key == 'Enter'){
      if (this.state.visible == false){
        this.openSideBar();
      }else{
        this.closeSideBar();
      }
    }
  }

  openSideBar = () =>{
    document.getElementById("leftSideNav").style.width = "50px";
    this.setState({
      visible: true
    });
  }

  closeSideBar  = () =>{
    document.getElementById("leftSideNav").style.width = "0px";
    this.setState({
      visible: false
    });
  }

 
  render() {
    return <div ref={this.setWrapperRef}> 
      <div className='tab' onClick={this.openSideBar}>
        <div className='halfCircle'>
          <IoMdMore size={32} style={svgShadowDrop} />
        </div>
      </div>
      <div id='leftSideNav' className='sidenav'>
        <a className='closebtn' onClick={this.closeSideBar}>
          <IoIosCloseCircle size={32} />
        </a>
        <a data-balloon='Playground' data-balloon-pos='right' className='cubeItem' href='#'>
          <IoMdCube size={32} />
        </a>
        <a data-balloon='About Sawa' data-balloon-pos='right' className='aboutItem' href='#'>
          <GoPerson size={32} />
        </a>
        <a data-balloon='Blog' data-balloon-pos='right' className='articleItem' href='#'>
          <IoIosJournal size={32} />
        </a>
      </div>
    </div>;
  }
}

export default SideBar