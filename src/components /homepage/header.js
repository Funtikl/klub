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
  if (event.srcElement.scrollingElement.scrollTop>520){
    this.setState({
      headerFall:true
    })

  }else if(event.srcElement.scrollingElement.scrollTop<520){
    this.setState({
      headerFall:false
    })
  }
  }
   render() {
    return (
      <div onScroll={this.handleScroll} className={this.state.headerFall?homestyles.header2:homestyles.header} >
      <h2 className={this.state.headerFall ? homestyles.logo2 : homestyles.logo}>Hklub</h2>
      <Nav className={homestyles.navStyle}>
        <NavItem >
          <NavLink className={this.state.headerFall?homestyles.navItems2:homestyles.navItems} href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={this.state.headerFall?homestyles.navItems2:homestyles.navItems} href="/donates">Donate</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={this.state.headerFall?homestyles.navItems2:homestyles.navItems} href="/gallery">Gallery</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={this.state.headerFall?homestyles.navItems2:homestyles.navItems}  href="/blog">Blog</NavLink>
        </NavItem>
        <NavItem>
        <NavLink className={this.state.headerFall?homestyles.navItems2:homestyles.navItems}  href="/about">About</NavLink>
      </NavItem>
      <NavItem>
      <NavLink className={this.state.headerFall?homestyles.navItems2:homestyles.navItems}  href="/contact">Contact</NavLink>
    </NavItem>
      </Nav>
      <h2 className={this.state.headerFall?homestyles.coverText2:homestyles.coverText}>
      Please Help African Children Give Them A Better Life.</h2>
      </div>
    )
  }
}
