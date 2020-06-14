import React from "react";
import database from "./firebaseConfig";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage,MDBCardHeader, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";

export default function OneCard(props) {

    const handleFineshed=(e)=>{
    
    let finishState= database.collection('Curriculim').doc(e.target.id)

   !finishState.finished ? finishState.update({finished:true}): finishState.update({finished: false})
    // const refresh = ()=>props.rerender
    // pass the chapter fetch as props and call it here to rerender the fetch after update ---------------- notes form ammar
    // on snapshot from firebase*(instant refresh and render) -------------------------------------------------------------
    // refresh()
    // e.target.value="loading..."
    }
    const addToPlan = (e)=>{
      database.collection('Curriculim').doc(e.target.id).update({inPlan : true})
      // const refresh = ()=>props.rerender
      // refresh()
    }
    const addHelp = (e)=>{
      database.collection('Curriculim').doc(e.target.id).update({needHelp : e.target.value})
    }
    //  const handleMoveToPlan = ()=>{
    //   if (!props.card.finished){ <MDBBtn onClick={addToPlan} id={props.card.id}>move to plan</MDBBtn>}
    //   else if (props.card.inPlan && !props.card.finished){''}
    //   else {''}
    // }

  return (
      <MDBCard className="oneCard" style={{ maxWidth: "35rem" }}>
      <MDBCardHeader>Section:{props.card.sec}</MDBCardHeader> 
        <MDBCardTitle>Chapter Name:{props.card.name}</MDBCardTitle>
        <MDBCardBody>
          <MDBCardText>id:{props.card.id}</MDBCardText>
          <MDBCardText>Time needed:{props.card.time} minutes</MDBCardText>
          <MDBCardText>Number of Lessons:{props.card.lessons}</MDBCardText>
          {!props.card.finished?<MDBBtn onClick={addToPlan} id={props.card.id}>move to plan</MDBBtn>:''}
          {/* {handleMoveToPlan()} */}
          <MDBCardText>In Plan? {props.card.inPlan? "yes": "no"}</MDBCardText>
          {props.card.inPlan?
            <MDBCardText>Need Help <input type="text" placeholder="Name" id={props.card.id} onChange={addHelp}></input> {props.card.inPlan? "yes": "no"}</MDBCardText>:''}
          {props.card.needHelp?<MDBCardText>Contact {props.card.needHelp} for Help</MDBCardText>:''}
          <MDBCardText>Finished:</MDBCardText>
          <MDBBtn onClick={handleFineshed} id={props.card.id} > {props.card.finished ? "Hell yeah!": " Nope :("}</MDBBtn>
        </MDBCardBody>
    </MDBCard>
  );
}
