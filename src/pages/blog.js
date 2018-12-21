import React from 'react'
import SideBar from '../components/sidebar'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Blog = () => (
  <Layout>
    {/* <h1>Here is the blog page</h1>
    <p>Welcome to my blog</p>
    <Link to='/'>Go back to the homepage</Link> */}
    <SideBar />
  </Layout>
)

export default Blog
