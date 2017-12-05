import React from "react";
import { NavLink } from "react-router-dom";
import UpdateTask from '../containers/updateTask.jsx'
import {
  Grid,
  Navbar,
  Jumbotron,
  Button,
  NavDropdown,
  MenuItem,
  NavItem,
  Nav
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "font-awesome/css/font-awesome.min.css";



const NavBar = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">TODOS</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          <UpdateTask/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
