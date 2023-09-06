import './custom.css';
import React from 'react'
import HomePage from '../home_page/HomePage';
import AboutUs from '../about_us/AboutUs';
import ResponsiveNavBar from '../nav_bar/ResponsiveNavBar';
import Services from '../services/Services';
import Company from '../company/Company';
import Projects from '../projects/Projects';
import ContactUs from '../contact_us/ContactUs';
import SubContactUs from '../contact_us/sub_contact/SubContactUs';

export default function PageBody() {
  return (
    <div>

      <ResponsiveNavBar home='home' about_us='about-us' services={'services'} company={'company'} projects={'projects'} contact={'contact_us'} />

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

      <section id='projects'>
        Projects
        <Projects />
      </section>

      <section id='contact_us' className='container-fluid'>
        <div className='row contact-row'>
          <div className='about-us-cover contact col-sm-12 col-md-6'>
            <ContactUs />
          </div>
        </div>
      </section>


      <section id='sub_contact' className='container-fluid'>
        <div className='row'>
          <div className='sub-contact-div col-sm-12 col-md-6'>
          <SubContactUs />
          </div>
        </div>
      </section>

      
    </div>
  )
}
