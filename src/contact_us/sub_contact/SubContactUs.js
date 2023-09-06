import React from 'react'
import './custom.css'
import line from './../../resources/img/line.jpg'
import InputForm from './input_form/InputForm'

export default function SubContactUs() {
  return (
    <div id='sub-contact' >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-7 col-sm-12' >

            <div className='sub-contact-topic'>
              <img style={{ width: '20%', height: '10px', alignSelf: 'flex-end', marginBottom: '15px', marginRight: '15px' }} src={line} alt='line' />
              Contact Us
              <img style={{ width: '20%', height: '10px', alignSelf: 'flex-end', marginBottom: '15px', marginLeft: '15px' }} src={line} alt='line' />
            </div>

            <div className='sub-contact-title'>
              If there's anything we can help you with, just let us know.
            </div>
            <div className='sub-contact-text'>
              Upon receiving your request EonTech will contact you ASAP for further steps. (Double check your phone number and email before submitting)
            </div>

            <div className='contact-gmail'>
              <div className='gmail-icon'>

              </div>
              <div className='gmail-text'>
                groupeontech@gmail.com
              </div>
            </div>

          </div>


          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='col-md-5 col-sm-12'>

            <div className='email-send-cover'>
              <InputForm/>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
