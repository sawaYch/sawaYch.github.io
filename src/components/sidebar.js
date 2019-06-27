import React from 'react'
import ReactDOM from 'react-dom'
import { navigate } from "gatsby"
import './sidebar.css'
import {
  IoIosCloseCircle,
  IoMdCube,
  IoIosJournal,
  IoMdMore,
  IoIosDesktop
} from 'react-icons/io'
import { GoPerson } from 'react-icons/go'
import { Link } from 'gatsby'

// const cubeStyle = {
//   color: "orange",
//   left: "10px"
// };

const svgShadowDrop = {
  // filter: 'drop-shadow( 1px 1px 2px #00ff00 )'
}

const SideBar = () => <SideNav />

class SideNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      visible: false, 
      currentItemIndex: 0
    }
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
    document.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
    document.removeEventListener('keypress', this.handleKeyPress)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.closeSideBar()
    }
  }

  handleKeyPress(event) {
    if (event.key == 'Enter') {
      if (this.state.visible == false) {
        this.openSideBar()
      } else {
        this.closeSideBar()
      }
    }
    else if (event.key == 'w' && this.state.visible == true ) {
      this.setState({
        currentItemIndex : (this.state.currentItemIndex + 4 - 1) % 4,
      });
      this.updateSelection()
    }
    else if (event.key == 's' && this.state.visible == true) {
      this.setState({
        currentItemIndex : (this.state.currentItemIndex + 1) % 4,
      });
      this.updateSelection()
    }
    else if (event.key == 'a' && this.state.visible == true) {
      var routeMap = ['/','/blog/', '/playground/', '/about/']
      this.closeSideBar()
      setTimeout( function() { navigate(routeMap[this.state.currentItemIndex]) }.bind(this), 300 );
    }

    
  }

  openSideBar = () => {
    document.getElementById('leftSideNav').style.width = '7vh'
    this.setState({
      visible: true,
    })
  }

  closeSideBar = () => {
    document.getElementById('leftSideNav').style.width = '0px'
    this.setState({
      visible: false,
    })
  }

  updateSelection = () => {
    var nameMap = ['homeItem','articleItem','cubeItem','aboutItem']
    var colorMap = ['#27afe6','greenyellow', 'orange', 'MediumOrchid']
    for(var i = 0; i < 4; ++i){
      ReactDOM.findDOMNode(this).getElementsByClassName(nameMap[i])[0].style.color=colorMap[i]
    }
    ReactDOM.findDOMNode(this).getElementsByClassName(nameMap[this.state.currentItemIndex])[0].style.color='white'
  }

  render() {
    return (
      <div ref={this.setWrapperRef}>
        <div className='tab' onClick={this.openSideBar}>
          <div className='halfCircle'>
            <IoMdMore size={'5vh'} style={svgShadowDrop} />
          </div>
        </div>
        <div id='leftSideNav' className='sidenav'>
          <a className='closebtn' onClick={this.closeSideBar}>
            <IoIosCloseCircle size={'5vh'} />
          </a>
          <Link to='/playground/'>
            <div
              data-balloon='Playground'
              data-balloon-pos='left'
              className='cubeItem'
            >
              <IoMdCube size={'5vh'} />
            </div>
          </Link>
          <Link to='/about/'>
            <div
              data-balloon='About Sawa'
              data-balloon-pos='left'
              className='aboutItem'
            >
              <GoPerson size={'5vh'} />
            </div>
          </Link>
          <Link to='/blog/'>
            <div
              data-balloon='Blog'
              data-balloon-pos='left'
              className='articleItem'            
            >
              <IoIosJournal size={'5vh'} />
            </div>
          </Link>
          <Link to='/'>
            <div
              data-balloon='Index'
              data-balloon-pos='left'
              className='homeItem'            
            >
              <IoIosDesktop size={'5vh'} />
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default SideBar
