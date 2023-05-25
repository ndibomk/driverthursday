import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {TfiWorld} from 'react-icons/tfi'
import {FiSettings} from 'react-icons/fi'
import {BsPeople} from 'react-icons/bs'
function BasicExample() {
  return (
    <Navbar style={{background:' rgb(115, 32, 32)',color:'white'}}  expand="lg">
      <Container>
       <Navbar.Brand style={{background:' rgb(115, 32, 32)',color:'white'}}> Dating App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
         <div className='links'>
<Link className='link' to="/online">Online</Link>
          <Link className='link' to="/matches">Matches</Link>
          <Link className='link' to="/search">Search</Link>
          <Link className='link' to="/messages">Messages</Link>
          <Link className='link' to="/activity">Activity</Link>
        
         </div>
         <div className="dot">......................................................
         ................................</div>
            <NavDropdown style={{background:' rgb(115, 32, 32)',color:'white'}} title="Choose a language" id="basic-nav-dropdown">
              <NavDropdown.Item style={{background:' rgb(115, 32, 32)',color:'white'}} href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item style={{background:' rgb(115, 32, 32)',color:'white'}} href="#action/3.2">
               Kiswahili
              </NavDropdown.Item>
              
            </NavDropdown>
           <div className="nav-icons">
            <TfiWorld/>
            <BsPeople/>
            <FiSettings/>
          </div>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;