import React from "react";
import "./App.css";
// import Loginpage from './loginpage'
// import Columns from "./Column";
// import database from "./firebaseConfig";
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
      <CurriculumOverview />
      </div>
  );
}

export default App;
