import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#254A71" }}
      variant="dark"
      className="fixed"
    >
      <Container className="navbarwrapper">
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link href="#deets">
              <Link to="/#top" className="nav-link text-white hover:opacity-75">
                <span className="ml-2 innertext">Home</span>
              </Link>
            </Nav.Link>
            <Nav.Link href="#deets">
              <Link
                to="/#Signin"
                className="nav-link text-white hover:opacity-75"
              >
                <span className="ml-2 innertext">Sign In</span>
              </Link>
            </Nav.Link>
            <Nav.Link href="#deets">
              <Link
                to="/#AboutUs"
                className="nav-link text-white hover:opacity-75"
              >
                <span className="ml-2 innertext">About Us</span>
              </Link>
            </Nav.Link>
            <Nav.Link href="#deets">
              <Link
                to="/#Ourservices"
                className="nav-link text-white hover:opacity-75"
              >
                <span className="ml-2 innertext">Our services</span>
              </Link>
            </Nav.Link>

            <Nav.Link href="#deets">
              <Link
                to="/ContactUs#top"
                className="nav-link btn border-white hover:text-red-700 hover:bg-red-700 rounded-pill ps-3 pe-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75"
              >
                <span className="ml-2 innertext">Contact Us</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
