import React from "react";
import database from "./firebaseConfig";
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

export default function OneCard(props) {
  // console.log(props);
  const handleFineshed = async (e) => {
    console.log(props);

    let finishState = database.collection("Curriculim").doc(e.target.id);
    if (props.card.finished) {
       finishState.update({finished: false})
       props.refetch();

  }
else if (!props.card.finished){
      finishState.update({finished: true, inPlan:false})
      props.refetch();

    }
    // Inverts the prevıous fınısh state.
    // if (database.collection("Curriculim").doc(e.target.id).finished === false) {
    //   database.collection("Curriculim").doc(e.target.id).update({ finished: true });
    // } else if(database.collection("Curriculim").doc(e.target.id).finished === true) {
    //   // console.log("not working")
    //   database.collection("Curriculim").doc(e.target.id).update({ finished: false });
    // }
    // await finishState.update({ finished: Boolean ? true:false })
    // await finishState.update({ finished: Boolean(finishState.finished) });

    // await finishState.update({ finished: !Boolean(finishState.finished) })
    // await finishState.update({ finished: Boolean(finishState.finished) });
    props.refetch();

    // const refresh = ()=>props.rerender
    // pass the chapter fetch as props and call it here to rerender the fetch after update ---------------- notes form ammar
    // on snapshot from firebase*(instant refresh and render) -------------------------------------------------------------
    // refresh()
    // e.target.value="loading..."
  };
  const addToPlan = async (e) => {
    await database
      .collection("Curriculim")
      .doc(e.target.id)
      .update({ inPlan: true });
    props.refetch();
    // const refresh = ()=>props.rerender
    // refresh()
  };
  const addHelp = async (e) => {
    await database
      .collection("Curriculim")
      .doc(e.target.id)
      .update({ needHelp: e.target.value });
    props.refetch();
  };
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
        {!props.card.finished && !props.card.inPlan ? (
          <MDBBtn onClick={addToPlan} id={props.card.id}>
            Plan It <MDBIcon icon="magic" className="ml-1" />
          </MDBBtn>
        ) : (
          ""
        )}
        {/* {handleMoveToPlan()} */}
        <MDBCardText>In Plan? {props.card.inPlan ? "yes" : "no"}</MDBCardText>
        {props.card.inPlan ? (
          <MDBCardText>
            Need Help{" "}
            <MDBInput
              type="text"
              label="Name"
              id={props.card.id}
              onChange={addHelp}
            />{" "}
          </MDBCardText>
        ) : (
          ""
        )}
        {/* //className="font-weight-bold" this was in the need help (displayed text)*/}
        {props.card.needHelp ? (
          <MDBCardText>
            Contact{" "}
            <span className="font-weight-bold">{props.card.needHelp}</span> for
            Help
          </MDBCardText>
        ) : (
          ""
        )}
        <MDBCardText>Finished:</MDBCardText>
        <MDBBtn onClick={handleFineshed} id={props.card.id}>
          {" "}
          {props.card.finished ? "Moved to not finished" : " Move to finished"}
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
