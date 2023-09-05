import React from 'react'
// import ResponsiveNavBar from '../nav_bar/ResponsiveNavBar';
import './custom.css';
import PageBody from '../page_body/PageBody';
import './../page_body/custom.css';

export default function MainPage() {
  return (
    <div className='main'>
      {/* <ResponsiveNavBar /> */}
      <PageBody />
    </div>
  )
}
