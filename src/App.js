import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import LoginPage from "./loginpage"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";

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
      <Router>
        {/* <MDBNavbar className='fixedNav' color="default-color" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">LearnGo</strong>
          </MDBNavbarBrand> */}
        <Route path="/" component={Nav} />
        {/* </MDBNavbar> */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
