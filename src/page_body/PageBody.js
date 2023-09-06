import './custom.css';
import React from 'react'
import HomePage from '../home_page/HomePage';
import AboutUs from '../about_us/AboutUs';
import ResponsiveNavBar from '../nav_bar/ResponsiveNavBar';
import Services from '../services/Services';
import Company from '../company/Company';
import Projects from '../projects/Projects';

export default function PageBody() {
  return (
    <div>

      <ResponsiveNavBar home='home' about_us='about-us' services={'services'} company={'company'} projects={'projects'} />

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

      <section id='company' className='container-fluid'>
        <div className='row'>
          <div className='company-cover col-sm-12 col-md-6'>
            <Company />
          </div>
        </div>
      </section>

      {/* <section id='projects' className='container-fluid'>
        <div className='row'>
          <div className='projects-cover col-sm-12 col-md-6'>
          Projects
        <Projects/>
          </div>
        </div>
      </section> */}

      <section id='projects'>
        Projects
        <Projects />
      </section>

    </div>
  )
}
