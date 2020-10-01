import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import style from "./css/Header.module.css";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <h3 className={style.logo}>Real School</h3>
        </Navbar.Brand>
        <Nav className={style.ml}>
          <div className={style.wrapper}>
            <div className={style.button}>
              <div className={style.icon}>
                <i class="fas fa-user-circle"></i>
              </div>
              <span>INR 200</span>
            </div>
          </div>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto font-weight-bold">
            <Nav.Link href="#features">Masterclasses</Nav.Link>
            <Nav.Link href="#pricing">Programs</Nav.Link>
            <Nav.Link href="#deets">Challenges</Nav.Link>
            <Nav.Link href="#deets">Library</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
