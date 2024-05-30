import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Images/logo.png'
import './Mainnav.css'
const MainNav = () => {
  return (
    <div>
       <Navbar expand="md" className="navbar-dark">
      <Container className='container'>
        <Navbar.Brand href="#home" className='logo text-light'> <img src={logo} alt="" />Arshan<span>Dev</span></Navbar.Brand>
        <Navbar.Toggle className="toggle"aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav ms-auto">
            <Nav.Link className="navlink text-light" href="#about">About</Nav.Link>
            <Nav.Link className="navlink text-light"  href="#work">Work</Nav.Link>
            <Nav.Link className="navlink text-light" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MainNav
