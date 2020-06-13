import React from "react";
import database from "./firebaseConfig";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";

export default function OneCard(props) {

    const handleFineshed=(e)=>{
    
    let abi= database.collection('Curriculim').doc(e.target.id)
  //   if (abi.finished){
  //     abi.update({ 
  //   finished: false
  //  })}
  //   else if (!abi.finished){ abi.update({ finished: true})}
   !abi.finished ? abi.update({finished:true}): abi.update({finished: false})
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

    <MDBCard className="oneCard" style={{ maxWidth: "45rem" }}>
      
      <MDBCardTitle>Chapter Name:{props.card.name}</MDBCardTitle>
      <MDBCardBody>
      <MDBCardText>Section:{props.card.sec}</MDBCardText>
      <MDBCardText>id:{props.card.id}</MDBCardText>
      <MDBCardText>Time needed:{props.card.time} minutes</MDBCardText>
      <MDBCardText>Number of Lessons:{props.card.lessons}</MDBCardText>
       {!props.card.finished?
      <MDBBtn>move to plan</MDBBtn>: <MDBCardText>merhaba</MDBCardText>
       }
      <MDBCardText>Finished:</MDBCardText>
      <MDBBtn onClick={handleFineshed} id={props.card.id} > {props.card.finished ? "Hell yeah!": " Nope :("}</MDBBtn>
      {/* <button onClick={()=>props.rerender} > Done </button> */} 
</MDBCardBody>
    </MDBCard>
  );
}
{/* <MDBBtn outline color="success">Success</MDBBtn> */}
