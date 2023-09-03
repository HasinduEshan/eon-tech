import React from 'react'
import ResponsiveNavBar from '../nav_bar/ResponsiveNavBar';
import './custom.css';
import PageBody from '../page_body/PageBody';

export default function MainPage() {
  return (
    <div>
      <ResponsiveNavBar />
      <PageBody />
    </div>
  )
}
