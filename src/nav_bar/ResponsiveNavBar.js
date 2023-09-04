import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png';
import './custom.css';
import { Link } from "react-scroll";



// varient="dark" data-bs-theme="dark"   bg-body-tertiary 

function ResponsiveNavBar({ home, about_us }) {

  return (
    <Navbar expand="sm" className="custom-navbar-theme" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#" ><img className="img-logo" src={logo} alt='EonTech' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="justify-content-end mr-auto" style={{ width: "100%" }}>
            {/* <Nav.Link id='home' href={`#${home}`} className='custom-nav'>
                Home
            </Nav.Link>
            <Nav.Link id='about-us' href={`#${about_us}`} className='custom-nav'>About Us</Nav.Link> */}
            {/* <Nav.Link id='services' href="#services" className='custom-nav'>Services</Nav.Link>
            <Nav.Link id='company' href="#company" className='custom-nav'>Company</Nav.Link>
            <Nav.Link id='projects' href="#projects" className='custom-nav'>Projects</Nav.Link>
            <Nav.Link id='contact-us' href="#contactUs" className='custom-nav'>Contact Us</Nav.Link> */}
            
            <Link className='nav-link' activeClass="active" to={home} spy={true} smooth={true} offset={-70} duration={100}>
              Home
            </Link>

            <Link className='nav-link' activeClass="active" to={about_us} spy={true} smooth={true} duration={100}>
              About Us
            </Link>

            <Link className='nav-link' activeClass="active" spy={true} smooth={true} duration={100}>
              Services
            </Link>

            <Link className='nav-link' activeClass="active" spy={true} smooth={true} duration={100}>
              Company
            </Link>

            <Link className='nav-link' activeClass="active" spy={true} smooth={true} duration={100}>
              Projects
            </Link>

            <Link className='nav-link' activeClass="active" spy={true} smooth={true} duration={100}>
              Contact Us
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavBar;