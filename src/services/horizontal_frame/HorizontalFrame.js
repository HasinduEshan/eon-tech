import './custom.css'
import React from 'react'
import MyCard from '../card/MyCard'
import seDevImg from './../../img/development.png'

export default function HorizontalFrame() {
  return (
    <div className="scroll-container">
      <MyCard title={'Software Development'} text={'Creating tailored software solutions to address specific business needs, from web and mobile applications to enterprise software.'} image={seDevImg} />
      <MyCard title={'Software Development'} text={'Creating tailored software solutions to address specific business needs, from web and mobile applications to enterprise software.'} image={seDevImg} />
      <MyCard title={'Software Development'} text={'Creating tailored software solutions to address specific business needs, from web and mobile applications to enterprise software.'} image={seDevImg} />
      <MyCard title={'Software Development'} text={'Creating tailored software solutions to address specific business needs, from web and mobile applications to enterprise software.'} image={seDevImg} />
    </div>
  )
}
