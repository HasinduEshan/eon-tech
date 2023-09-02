import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png';
import './custom.css';


// varient="dark" data-bs-theme="dark"   bg-body-tertiary 

function ResponsiveNavBar() {
  return (
    <Navbar expand="sm" className="custom-navbar-theme">
      <Container>
        <Navbar.Brand><img className="img-logo" src={logo} alt='EonTech'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#home" className='custom-nav'>Home</Nav.Link>
            <Nav.Link href="#link" className='custom-nav'>About Us</Nav.Link>
            <Nav.Link href="#services" className='custom-nav'>Services</Nav.Link>
            <Nav.Link href="#company" className='custom-nav'>Company</Nav.Link>
            <Nav.Link href="#projects" className='custom-nav'>Projects</Nav.Link>
            <Nav.Link href="#contactUs" className='custom-nav'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavBar;