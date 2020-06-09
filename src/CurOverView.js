import React,{useState,useEffect} from "react";
import Column from './Column'
import OneCard from "./oneCard"
import database from "./firebaseConfig";

export default function CurOverView(props) {
    const [cardArr,setCardArr]= useState([]);
    async function chapterFetch () {
  
        const res = await database.collection('Curriculim').get();
        const data = res.docs.map( (el)=>el.data())
    
          setCardArr([...data])

      };
  
    useEffect(() => {
       chapterFetch();
  
    }, [])
  

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
        
        <div rerender={useEffect()}>
        <h2>LearnGO</h2>

        <div>
            
          <Column title="Finished" cardData={cardArr} />
          <Column title="Not Finished" cardData={cardArr}/>
          <Column title="In Plan" cardData={cardArr} />

        </div></div>
    )
}
