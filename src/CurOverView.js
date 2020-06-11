import React,{useState,useEffect} from "react";
import Column from './Column'
import OneCard from "./oneCard"
import database from "./firebaseConfig";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


export default function CurOverView(props) {
    const [cardArr,setCardArr]= useState([]);

    async function chapterFetch () {
  
        const res = await database.collection('Curriculim').get();
        const data = res.docs.map( (el)=>el.data())
    
          setCardArr(data)

      };
  
    // useEffect(() => {
    //    chapterFetch();
  
    // }, [])
    chapterFetch();

//   const inPlan = []
//   const finishedCards = [];
//   const notFinshed = [];
//   const filterCards=()=>{
//     cardArr.map(function (card,index){
//       // if card.finished ? ( finishedCards.push(card)) : (notFinshed.push(card)) // still have a problem here  
//       if (card.finished){ finishedCards.push(card)} else{notFinshed.push(card)}
//       //   if card.finished?: finished.push(card)
     
//     })
//     // console.log(finishedCards)
// }
    return (
      <MDBContainer>
        <div>
        <MDBRow>
        
        <MDBCol> <Column title="Finished" cardData={cardArr} rerender={chapterFetch()}/></MDBCol>
        <MDBCol> <Column title="Not Finished" cardData={cardArr}/></MDBCol>
        <MDBCol> <Column title="In Plan" cardData={cardArr} /></MDBCol>
          </MDBRow>

        </div>
        </MDBContainer>
    )
}
