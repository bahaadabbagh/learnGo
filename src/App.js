import React from "react";
import "./App.css";
import Nav from './components/index'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import LoginPage from "./loginpage"
// import Columns from "./Column";
// import database from "./firebaseConfig";
import {  BrowserRouter as Router,  Route,} from "react-router-dom";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact";

import CurriculumOverview from "./CurOverView"

function App(props) {


  // CardsColum ntakes two props
  // title/category: "in progress" ,. ..
  // cards: an array of card objects
  /*
  <CurriculumOverview> (new component)
  Inside it, it is responsible for fetching from firebase and creating 3 card columns
  It has a local state that contains all your cards. Inside Curriculum overview, it loops through all cards
  and divides them into categories.
  The advantage of this approach is that when you update CurriculumOverview's local state, it automatically
  passes down the new updated cards to all the props and "re-puts" them in the right category.
  */

  return (
    <div className="App">
      {/* <h2>LearnGO</h2> */}
      <Router>
        <MDBNavbar color="indigo" dark expand="md">
          <MDBNavbarBrand>
          <strong className="white-text">LearnGo</strong>
          </MDBNavbarBrand>
          <Route path='/' component={Nav}/>
        </MDBNavbar>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route exact path='/' component={Home}/>
      </Router>
      
     </div>
  );
}

export default App;


///----------------------------------------------------

//   return (
//     <Router>
//       <MDBNavbar color="indigo" dark expand="md">
//         <MDBNavbarBrand>
//           <strong className="white-text">Navbar</strong>
//         </MDBNavbarBrand>
//         <MDBNavbarToggler onClick={this.toggleCollapse} />
//         <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
//           <MDBNavbarNav left>
//             <MDBNavItem active>
//               <MDBNavLink to="#!">Home</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="#!">Features</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="#!">Pricing</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle nav caret>
//                   <span className="mr-2">Dropdown</span>
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu>
//                   <MDBDropdownItem href="#!">Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavItem>
//           </MDBNavbarNav>
//           <MDBNavbarNav right>
//             <MDBNavItem>
//               <MDBFormInline waves>
//                 <div className="md-form my-0">
//                   <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
//                 </div>
//               </MDBFormInline>
//             </MDBNavItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBNavbar>
//     </Router>
//     );
//   }
// }

// export default App;