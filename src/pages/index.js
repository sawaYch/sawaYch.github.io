import React from 'react'
import { Helmet } from "react-helmet"

// import { Link } from 'gatsby'
import Layout from '../components/layout'
// import Image from '../components/image'
import Nag from '../components/nag';
import Lnk from '../components/lnk';
import SideBar from '../components/sidebar'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' />
    </Helmet>
    <Nag />
    <Lnk />
    <SideBar />
    <span onClick={openSideBar}>open</span>

    

  </Layout>
)

function openSideBar(){
  document.getElementById("leftSideNav").style.width = "50px";

}

export default IndexPage
