import React from 'react';
import { NavLink } from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";

const Menu: React.FunctionComponent = () => (
    <div className="nav-container">
    <Navbar className="navbar-opacity" bg="light" variant="light">
      <Nav className="mr-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/coffee">Facts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cupOf">Cup of coffee</NavLink>
        <NavLink to="/types">Type of Coffee</NavLink>
      </Nav>
    </Navbar>
  </div>
)

export default Menu;