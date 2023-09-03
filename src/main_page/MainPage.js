import React from 'react'
import ResponsiveNavBar from '../nav_bar/ResponsiveNavBar';
import HomePage from '../home_page/HomePage';
import './custom.css';

export default function MainPage() {
  return (
    <div>
      <ResponsiveNavBar />
      <HomePage />
    </div>
  )
}
