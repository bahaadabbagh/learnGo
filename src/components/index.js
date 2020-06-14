import React from 'react'
import { MDBNavLink, MDBContainer } from "mdbreact";

const Nav =()=>{

    return(
        
        <MDBContainer className="navbar">
                <MDBNavLink to='/'>Home</MDBNavLink>       
                <MDBNavLink to='/about'>About</MDBNavLink>
                <MDBNavLink to='/contact'>Contact</MDBNavLink>
        </MDBContainer>
    )
}
 
export default Nav


