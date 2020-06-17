import React, { useState, useEffect } from "react";
import Column from "./Column";
import database from "./firebaseConfig";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function CurOverView(props) {
  const [cardArr, setCardArr] = useState([]);

  async function chapterFetch() {
    const res = await database.collection("Curriculim").get();
    const data = res.docs.map((el) => el.data());
    setCardArr(data);
  }

  // useEffect(() => {
  //    chapterFetch();
  // }, [])
  React.useEffect(() => {
    chapterFetch();
  }, []);
  //   const inPlan = []
  //   const finishedCards = [];
  //   const notFinshed = [];
  //   const filterCards=()=>{
  //     cardArr.map(function (card,index){
  //       // if card.finished ? ( finishedCards.push(card)) : (notFinshed.push(card)) // still have a problem here
  //       if (card.finished){ finishedCards.push(card)} else{notFinshed.push(card)}
  //       //   if card.finished?: finished.push(card)
  //     })
  // }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="4">
          {" "}
          <Column title="Finished" cardData={cardArr} refetch={chapterFetch} />
          {/* <Column title="Finished" cardData={cardArr} /> */}

        </MDBCol>
        <MDBCol sm="4">
          {" "}
          <Column
            title="Not Finished"
            cardData={cardArr}
            refetch={chapterFetch}
          />
        </MDBCol>
        <MDBCol sm="4">
          {" "}
          <Column title="In Plan" cardData={cardArr} refetch={chapterFetch} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
