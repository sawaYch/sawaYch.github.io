import React from 'react'
import '../components/layout_404.css'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div className='q'>
      <div className='c'>
        <div className='_404'>404</div>
        <div className='_1'>THE PAGE</div>
        <div className='_2'>WAS NOT FOUND</div>
        <a className='btn' href='/'>
          BACK TO THE EARTH
        </a>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
