import React from "react";
import {Nav,Navbar} from 'react-bootstrap';
import style from './css/Header.module.css';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg"  bg="light" variant="light">
        <Navbar.Brand href="#home"><h3 className={style.logo}>Real School</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
          </Nav>
          <Nav className="ml-auto font-weight-bold" >
            <Nav.Link href="#features">Masterclasses</Nav.Link>
            <Nav.Link href="#pricing">Programs</Nav.Link>
            <Nav.Link href="#deets">Challenges</Nav.Link>
            <Nav.Link href="#deets">Library</Nav.Link>
            <Nav.Link href="#inr" className={style.inr}><span className={style.inrlogo}><i class="fas fa-user-circle"></i></span><span>INR 200</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </>
  );
};

export default Header;
