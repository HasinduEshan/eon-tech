import React from 'react'
import './custom.css';

export default function HomePage() {
  return (
    <div>
      <div className='text1'>
        We are,
      </div>

      <div className='text2 container-fluid'>
        <div className='row'>
          <div className='text3-text4 col-md-3 col-sm-12'>
            <div className='text3'>
              Eon
            </div>
            <div className='text4'>
              Tech&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            
          </div>
          
          <div className='text3 col-md-9 col-sm-12'>
            Global Group (pvt)Ltd.
          </div>
        </div>
      </div>


      <div className='text5'>
        a Software Company based in Sri Lanka.
      </div>

      <div className='text6 col-md-7 col-sm-12'>
        As this generation is becoming more and more divers and open to the differences and changes EonTech Group would like to bring forward an innovative viewpoint that can absolutely make everyone feel the magnitude of high-tech.
      </div>

      <div className='icons'>
        <a href='https://www.linkedin.com/company/eontech-global-group-pvt-ltd/' rel="noreferrer" target="_blank">
          <div className='linkedin-icon'>
          </div>
        </a>
        <a href='https://wa.me/94742242812' rel="noreferrer" target="_blank">
          <div className='whatsapp-icon'>
          </div>
        </a>
        <a href='https://www.facebook.com/profile.php?id=100089482297473&mibextid=2JQ9oc' rel="noreferrer" target="_blank">
          <div className='facebook-icon'>
          </div>
        </a>
        <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDsVWLnWvGTBTSWswmsRZRnVLhBPDXvNcwhmtDPsfCtnCkSZWLGQGnkTvgGrRTlXlPmhJLb' rel="noreferrer" target="_blank">
          <div className='gmail-icon'>
          </div>
        </a>
      </div>
    </div>
  )
}