import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import React, { useState } from 'react';
import "../assets/css/style.css";

function Header() {
  const [warna, setWarna] = useState('#0dcaf0');

  const handleMouseEnter = () => {
    setWarna('#0d6efd');
  };

  const handleMouseLeave = () => {
    setWarna('#0dcaf0');
  };
  return (
    <div className="bg-primary" id="Header">
      <h1 className="p-5 text-center">Pemrograman Berbasis Web 1</h1>
      <Navbar expand="lg" className="bg-info p-1" style={{width:"100%"}} id="HeadNav">
        <Container fluid>
          <Navbar.Brand href="#" className="navbar-link m-0 px-4" style={{ textAlign: "center" }}>PBW1</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ width: "100%" }}>
              <Nav.Link
                href="#action1"
                className="navbar-link"
                style={{ width: "100%", textAlign: "center" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="navbar-link"
                style={{ width: "100%", textAlign: "center" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="navbar-link"
                style={{ width: "100%", textAlign: "center" }}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex" style={{ width: "100%" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button 
                variant="info"
                className="text-dark m-0 p-2 px-4"
                style={{ backgroundColor: warna }}
      			onMouseOver={handleMouseEnter}
      			onMouseOut={handleMouseLeave}
                >
                 Search
                </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
