import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import LogoNavbar from "rifui/LogoNavbar";

import { ROUTES } from "routes";

export default () => (
  <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
    <LinkContainer to={ROUTES.DOWNLOAD}>
      <Navbar.Brand>
        <LogoNavbar />
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto justify-content-end">
        <LinkContainer to={ROUTES.UPLOAD}>
            <Nav.Link>Upload</Nav.Link>
        </LinkContainer>                
        <LinkContainer to={ROUTES.DOWNLOAD}>
            <Nav.Link>Download</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
