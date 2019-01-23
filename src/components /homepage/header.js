import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import homestyles from './home.module.css';

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      headerFall:false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  
  handleScroll = (event) =>{
  if (event.srcElement.scrollingElement.scrollTop>20){
    this.setState({
      headerFall:true
    })
  }
  }
   render() {
    return (
      <div onScroll={this.handleScroll} className={homestyles.header1} >
      <h2 className={homestyles.logo}>Hklub</h2>
      <Nav className={homestyles.navStyle}>
        <NavItem >
          <NavLink className={homestyles.navItems} href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={homestyles.navItems} href="#">Donate</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={homestyles.navItems} href="#">Gallery</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={homestyles.navItems}  href="#">Blog</NavLink>
        </NavItem>
        <NavItem>
        <NavLink className={homestyles.navItems}  href="#">About</NavLink>
      </NavItem>
      <NavItem>
      <NavLink className={homestyles.navItems}  href="#">Contact</NavLink>
    </NavItem>
      </Nav>
      <h2 className={homestyles.coverText}>
      Please Help African Children Give Them A Better Life.</h2>
      </div>
    )
  }
}
