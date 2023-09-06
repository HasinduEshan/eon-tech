import React from 'react'
import './custom.css'
import { Button } from 'react-bootstrap'

export default function ContactUs() {
  
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scrolls to the bottom of the page
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <div className='container-fluid contact'>
      <div className='main-div main-div-contact row'>

        <div className='left-content left-content-contact col-sm-12 col-md-7'>
          <div className='contact-img'>

          </div>

        </div>

        <div className='right-content col-sm-12 col-md-5'>
          <div className='topic contact-topic'>Speak to an expert. Find out
            what EonTech can do for you.
          </div>
          <div className='sub-topic'>
            Contact us now.
          </div>
          <div className='content contact-content'>
            <div className='txt'>We’ll answer your questions and provide afree consultation on how to move forward.</div>
          </div>
          <div className='contact-btn-div'>
            <Button onClick={scrollToBottom} variant="outline-light" className="bold-button-text">Contact Us</Button>
          </div>
        </div>

      </div>
    </div>
  )
}
