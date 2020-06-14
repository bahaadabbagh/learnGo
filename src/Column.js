import React,{useState,useEffect} from "react";
import OneCard from "./oneCard";
import 'fontsource-roboto';

// import database from "./firebaseConfig";

export default function Cards(props) {
  
  // function renderNotfinshed(props){  
  //     const NotfinshedArr = notFinshed.map(function(card, index) {
  //       return <OneCard card={card} key={index} />;
  //     });
  //     return NotfinshedArr;
  //   };
  // Fixed number of columns: three (in progress, finished, not started)
  // Given a card, which column does it go to?
  // For each card:
  //    Figure out what column it goes to
  //    Put it in an array with other cards of same category
  // Render each of the three arrays
  function renderfinsihedCard() {
    const FinishedArr=[]
     props.cardData.forEach(function (card,index){
      if(props.title === "Finished" && card.finished){
      FinishedArr.push(<OneCard card={card} key={index} rerender={props.rerender} />)
      }
      else if(props.title === "Not Finished" && !card.finished && !card.inPlan){
        FinishedArr.push(<OneCard card={card} key={index} rerender={props.rerender} />)
      }
      else if (props.title ==="In Plan" && card.inPlan){
        FinishedArr.push(<OneCard card={card} key={index} rerender={props.rerender} />)
      }
    })

    return FinishedArr;
  }
  // for (... in cardArr) .... assign each one to one of the above
  return (
    <div className="column">
      <div>
      <h2>{props.title}</h2>
      </div>
      <div>
        {renderfinsihedCard()}</div>
    </div>
  );
}
