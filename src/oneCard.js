import React from "react";
import database from "./firebaseConfig";

export default function OneCard(props) {

 const handleFineshed=(e)=>{
   
  database.collection('Curriculim').doc(e.target.id).update({     
    finished: false
  })
}
  
  return (
    <div className="oneCard">
      <h3>Section:{props.card.sec}id:{props.card.id}</h3>
      <p>Chapter Name:{props.card.name}</p>
      <p>Time needed:{props.card.time} minutes</p>
  <p>Number of Lessons:{props.card.lessons}</p>
      {/* <span>Finished? {props.card.finished ? "yes": "no"}</span>
      <input type="button"></input> */}

      {/* <input type="button" ></input> */}
      <span>Finished:</span>
      <button onClick={handleFineshed} onChange={props.rerender} id={props.card.id} > {props.card.finished ? "Hell yeah!": " Nope :("}</button>

    </div>
  );
}
