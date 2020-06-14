import React from "react";
import database from "./firebaseConfig";
import { MDBBtn, MDBCard, MDBCardBody, MDBInput,MDBCardHeader, MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";

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
      <MDBCardHeader>{props.card.sec}</MDBCardHeader> 
        <p className="font-weight-bold">{props.card.name}</p>
        <MDBCardBody>
          <MDBCardText>id:{props.card.id}</MDBCardText>
          <MDBCardText>Time needed:{props.card.time} minutes</MDBCardText>
          <MDBCardText>Number of Lessons:{props.card.lessons}</MDBCardText>
          {!props.card.finished?<MDBBtn onClick={addToPlan} id={props.card.id}>Plane It <MDBIcon icon="magic" className="ml-1" /></MDBBtn>:''}
          {/* {handleMoveToPlan()} */}
          <MDBCardText>In Plan? {props.card.inPlan? "yes": "no"}</MDBCardText>
          {props.card.inPlan?
            <MDBCardText>Need Help <MDBInput type="text" label="Name" id={props.card.id} onChange={addHelp} /> </MDBCardText>:''}
            {/* //className="font-weight-bold" this was in the need help (displayed text)*/}
          {props.card.needHelp?<MDBCardText>Contact <span className="font-weight-bold">{props.card.needHelp}</span> for Help</MDBCardText>:''}
          <MDBCardText>Finished:</MDBCardText>
          <MDBBtn tag="span" onClick={handleFineshed} id={props.card.id} > {props.card.finished ? "Moved to not finished": " Move to finished"}</MDBBtn>
        </MDBCardBody>
    </MDBCard>
  );
}


{/* <MDBIcon icon="arrow-right" /> */}