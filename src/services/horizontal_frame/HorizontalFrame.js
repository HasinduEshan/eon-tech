import './custom.css'
import React from 'react'
import ServiceCard from '../card/ServiceCard'
import seDevImg from './../../resources/img/development.png'
import webDev from './../../resources/img/webDev.png'
import appDev from './../../resources/img/appDev.png'
import uiUX from './../../resources/img/uiUx.png'
import maintain from './../../resources/img/maintain.png'
import qa from './../../resources/img/qa.png'
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';

export default function HorizontalFrame() {
  const scrollToRight = () => {
    const scrollingWrapper = document.getElementById('scroll-container');
    if (scrollingWrapper) {
      scrollingWrapper.scrollBy({
        left: 421, // Adjust the value as needed
        behavior: 'smooth', // Add smooth scrolling behavior
      });
    }
  };

  const scrollToLeft = () => {
    const scrollingWrapper = document.getElementById('scroll-container');
    if (scrollingWrapper) {
      scrollingWrapper.scrollBy({
        left: -421, // Adjust the value as needed
        behavior: 'smooth', // Add smooth scrolling behavior
      });
    }
  };

  return (
    <div>
      <div className="scroll-container" id='scroll-container'>
        <ServiceCard title={'Software Development'} text={'Creating tailored software solutions to address specific business needs, from web and mobile applications to enterprise software.'} image={seDevImg} />
        <ServiceCard title={'Web development'} text={'Designing and developing websites, web applications, and e-commerce platforms.'} image={webDev} />
        <ServiceCard title={'Mobile App Development'} text={'Building applications for iOS, Android, and other mobile platforms to cater to diverse user needs.'} image={appDev} />
        <ServiceCard title={'Quality Assurance'} text={'Ensuring software quality through comprehensive testing, including functional, performance, and security testing.'} image={qa} />
        <ServiceCard title={'Software Maintance'} text={'Providing ongoing updates, bug fixes, and technical support to keep software running smoothly.'} image={maintain} />
        <ServiceCard title={'UI/UX'} text={'Creating tailored software solutions to address specific business needs, from web and mobile applications to enterprise software.'} image={uiUX} />
      </div>

      <div className='btn-div'>
        <div className='left-btn'>

          <ArrowLeftCircleFill id='left' onClick={scrollToLeft} />

        </div>
        <div className='right-btn'>

          <ArrowRightCircleFill id='left' onClick={scrollToRight} />

        </div>
      </div>
    </div>
  )
}
