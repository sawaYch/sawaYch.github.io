import React from 'react'
import { Helmet } from "react-helmet"
import Nag from '../components/nag';
import Lnk from '../components/lnk';
import SideBar from '../components/sidebar'
import CmdPalette from '../components/cmdpalette'
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.5.0/balloon.min.css' />
    </Helmet>
    <Nag />
    {/* <Lnk />  */}
    <SideBar />
    <CmdPalette />
  </Layout>
)


export default IndexPage
