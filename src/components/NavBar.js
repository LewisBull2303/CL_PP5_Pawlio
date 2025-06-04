import React from "react";

const NavBar = () => {
       return <Navbar expand="lg" className="bg-body-tertiary">
        <NavBar.Brand href="#home">React-Bootstrap</NavBar.Brand>
        <NavBar.Toggle aria-controls="basics-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

          </Nav>

        </Navbar.Collapse>
       </Navbar>
};

export default NavBar