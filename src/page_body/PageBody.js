// import coverImage from '../img/home-cover.jpg';
import './custom.css';
import React from 'react'
import HomePage from '../home_page/HomePage';
import AboutUs from '../about_us/AboutUs';

export default function PageBody() {
  return (
    <div>
      <div className='cover'>
        <HomePage />
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='second-cover col-sm-12 col-md-6'>
            <AboutUs />
          </div>
        </div>
      </div>
    </div>
  )
}
