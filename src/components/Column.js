import React, { useState } from "react";
import OneCard from "./oneCard";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact";
import OneCardList from "./oneCardList"

export default function Cards(props) {
  const [cardView,setcardView]= useState(true);
  const handleView=()=>{
    if (cardView){setcardView(false)}
    else {setcardView(true)}
  }
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
        if (cardView){
      FinishedArr.push(<OneCard card={card} key={index} refetch={props.refetch}/>)}
      else {
         FinishedArr.push(<OneCardList card={card} key={index} refetch={props.refetch}/>)
      }
      }
      else if(props.title === "Not Finished" && !card.finished && !card.inPlan){
        if (cardView){
          FinishedArr.push(<OneCard card={card} key={index} refetch={props.refetch}/>)}
        else {
          FinishedArr.push(<OneCardList card={card} key={index} refetch={props.refetch}/>)
        }
      }
      else if (props.title ==="In Plan" && card.inPlan){
        if (cardView){
          FinishedArr.push(<OneCard card={card} key={index} refetch={props.refetch}/>)
        }
        else {         
          FinishedArr.push(<OneCardList card={card} key={index} refetch={props.refetch}/>)
      }
      }
    })

    return FinishedArr;
  }
  // for (... in cardArr) .... assign each one to one of the above
  return (
    <div className="column">
      <div>
        <MDBBtn className="viewList" onClick={handleView}>change view</MDBBtn>
      <h2>{props.title}</h2>
      </div>
      <div>
        {renderfinsihedCard()}</div>
    </div>
  );
}
