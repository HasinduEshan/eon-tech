import './custom.css'
import React from 'react'
import { ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons';
import ProjectCard from './../project_card/ProjectCard'
import clothes from './../../resources/img/clothes.jpg'
import villa from './../../resources/img/villa.jpg'
import garment from './../../resources/img/garment.jpg'
import prison from './../../resources/img/proson.jpg'
import civil from './../../resources/img/civil.jpg'
import construction from './../../resources/img/construction.jpg'
import pet from './../../resources/img/pet.jpg'
import restaurant from './../../resources/img/restaurant.jpg'

export default function ProjectFrame() {
  const scrollToRight = () => {
    const scrollingWrapper = document.getElementById('project-scroll');
    if (scrollingWrapper) {
      scrollingWrapper.scrollBy({
        left: 421, // Adjust the value as needed
        behavior: 'smooth', // Add smooth scrolling behavior
      });
    }
  };

  const scrollToLeft = () => {
    const scrollingWrapper = document.getElementById('project-scroll');
    if (scrollingWrapper) {
      scrollingWrapper.scrollBy({
        left: -421, // Adjust the value as needed
        behavior: 'smooth', // Add smooth scrolling behavior
      });
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <div id='project-btn-div'>
        <div className='left-btn'>

          <ChevronCompactLeft id='left-btn' onClick={scrollToLeft} />

        </div>
      </div>

      <div className="scroll-container" id='project-scroll'>
        <ProjectCard image={clothes} title={'Clothes Shop Management'} content={'"Elevate your Clothing Store business with our Clothes Management System, streamlining operations and enhancing customer satisfaction."'} />
        <ProjectCard image={pet} title={'Pet Management System'} content={'"Nurture pets with care and precision using our comprehensive Pet Care Management System, ensuring their well-being and happiness."'} />
        <ProjectCard image={villa} title={'Villa Management System'} content={'"Experience the future of luxury living with our Smart Villa Management System, seamlessly integrating cutting-edge technology for unparalleled comfort and convenience."'} />
        <ProjectCard image={restaurant} title={'Restaurant Management System'} content={'"Optimize restaurant operations and guest experiences with our efficient Restaurant Management System, tailored to enhance every aspect of your establishment."'} />
        <ProjectCard image={garment} title={'Garment Retail Management'} content={'"Elevate your garment retail business with our tailored Management System, streamlining operations and enhancing customer satisfaction."'} />
        <ProjectCard image={prison} title={'Smart Prison Management System'} content={'"Revolutionizing corrections with our Smart Prison Management System for enhanced security and efficiency."'} />
        <ProjectCard image={civil} title={'Civil Management System'} content={'"Empowering communities through our Citizen Civil Management System, fostering collaboration and efficient urban development."'} />
        <ProjectCard image={construction} title={'Manage Constructions And building materials'} content={'"Empowering seamless construction operations through our Building Materials Management System, ensuring precision and productivity."'} />
      </div>

      <div id='project-btn-div'>
        <div className='right-btn'>

          <ChevronCompactRight id='left-btn' onClick={scrollToRight} />

        </div>
      </div>
    </div>
  )
}
