import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../resources/img/logo.png';
import './custom.css';
import { Link } from "react-scroll";

function ResponsiveNavBar({ home, about_us, services, company, projects, contact }) {
  
  return (
    <Navbar expand="sm" className="custom-navbar-theme" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#" ><img className="logo" src={logo} alt='EonTech' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="justify-content-end mr-auto" style={{ width: "100%" }}>

            <Link className='nav-link' activeClass="active" to={home} spy={true} smooth={true} offset={-70} duration={100}>
              Home
            </Link>

            <Link className='nav-link' activeClass="active" to={about_us} spy={true} offset={-50} smooth={true} duration={100}>
              About Us
            </Link>

            <Link className='nav-link' activeClass="active" to={services} spy={true} offset={-50} smooth={true} duration={100}>
              Services
            </Link>

            <Link className='nav-link' activeClass="active" to={company} spy={true} offset={10} smooth={true} duration={100}>
              Company
            </Link>

            <Link className='nav-link' activeClass="active" to={projects} spy={true} offset={-50} smooth={true} duration={100}>
              Projects
            </Link>

            <Link className='nav-link' activeClass="active" to={contact} spy={true} offset={-50} smooth={true} duration={100}>
              Contact Us
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavBar;