import React from 'react'
import './company_icons.css'


export default function CompanyIcons({image,title}) {
  return (
    <div className='company-icons'>
      <div className='company-icons-img'>
        <img className='company-icon' src={image} alt='icon'></img>
      </div>
      <div className='company-icons-title'>{title}</div>
    </div>
  )
}
