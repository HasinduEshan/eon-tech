// import coverImage from '../img/home-cover.jpg';
import './custom.css';
import React from 'react'
import HomePage from '../home_page/HomePage';
import AboutUs from '../about_us/AboutUs';
import ResponsiveNavBar from '../nav_bar/ResponsiveNavBar';
import Services from '../services/Services';

export default function PageBody() {
  return (
    <div>

      <ResponsiveNavBar home='home' about_us='about-us' services={'services'} />

      <section id='home' className='cover'>
        <HomePage />
      </section>
      <section id='about-us' className='container-fluid'>
        <div className='row'>
          <div className='about-us-cover col-sm-12 col-md-6'>
            <AboutUs />
          </div>
        </div>
      </section>
      <section id='services' className='services-cover'>
        Our Services
        <Services />
      </section>
      {/* <section id='company' className='container-fluid'>
        <div className='row'>
          <div className='company-cover col-sm-12 col-md-6'>
            
          </div>
        </div>
      </section> */}
    </div>
  )
}
