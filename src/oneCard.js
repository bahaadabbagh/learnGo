import React from "react";
import database from "./firebaseConfig";
import { MDBBtn } from "mdbreact";

export default function OneCard(props) {

 const handleFineshed=(e)=>{
   
  database.collection('Curriculim').doc(e.target.id).update({     //============  finished 
    finished: [false? true:false]
  })
   const refresh = ()=>props.rerender
  // pass the chapter fetch as props and call it here to rerender the fetch after update ---------------- notes form ammar
  // on snapshot from firebase*(instant refresh and render) -------------------------------------------------------------
    refresh()
    // e.target.value="loading..."
}
// console.log(props)
// const refreshHandler =()=>{

//   props.rerender()
// }
// async function chapterFetch () {
  
//   const res = await database.collection('Curriculim').get();
//   const data = res.docs.map( (el)=>el.data())

//     setCardArr([...data])

// };
  
  return (
    <div className="oneCard">
      <h3>Section:{props.card.sec}</h3>
      <h2>id:{props.card.id}</h2>
      <p>Chapter Name:{props.card.name}</p>
      <p>Time needed:{props.card.time} minutes</p>
      <p>Number of Lessons:{props.card.lessons}</p>
      {/* <span>Finished? {props.card.finished ? "yes": "no"}</span>
      <input type="button"></input> */}

      {/* <input type="button" ></input> */}
      <span>Finished:</span>
      <button onClick={handleFineshed} id={props.card.id} > {props.card.finished ? "Hell yeah!": " Nope :("}</button>
      {/* <button onClick={()=>props.rerender} > Done </button> */} 

    </div>
  );
}
{/* <MDBBtn outline color="success">Success</MDBBtn> */}
