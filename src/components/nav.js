import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";

const Nav = () => {
  return (
    //         <MDBNavbar className='fixedNav' color="default-color" dark expand="md">
    //             <MDBNavbarBrand>
    //             <strong className="white-text">LearnGo</strong>
    //           </MDBNavbarBrand>
    //         <MDBNavItem>
    //  <MDBNavLink to='/'>Home</MDBNavLink>
    //  </MDBNavItem>

    //  <MDBNavItem>
    //   <MDBNavLink to='/about'>About</MDBNavLink> </MDBNavItem>

    //   <MDBNavItem>
    //     <MDBNavLink to='/contact'>Contact</MDBNavLink> </MDBNavItem>

    //         </MDBNavbar>

    <MDBNavbar color="default-color" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">LearnGo</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler />
      <MDBCollapse id="navbarCollapse3" navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/about">About</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/contact">Contact</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Nav;
