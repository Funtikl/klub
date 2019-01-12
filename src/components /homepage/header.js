import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import homestyles from './home.module.css';

export default class header extends Component {
  render() {
    return (
      <div >
      <Nav>
        <NavItem >
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
      </div>
    )
  }
}
