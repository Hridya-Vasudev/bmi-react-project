import React from "react";

function Bmiscore({ bmiNo, bmiName,changeWeight }) {
  // console.log(props);
  // const{bmiNo,bmiName}=props;
  console.log(changeWeight);
  return (
    // <div>
    //   Bmi Score {bmiNo} <br></br>
    //   Bmi Type {bmiName}
    // </div>
    <div className="text-center shadow rounded p-4">
      <div>Your Bmi Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmiNo}</div>
      </div>
      <div className="fs-3 fw-bold text-primary">{bmiName}</div>
      {
        changeWeight.type=="positive"&&(<div className="fs-4"> "You need to loss <span className="fw-bold">{changeWeight.wight} KG"</span> </div>) 
      }
      {
        changeWeight.type=="negative"&&(<div className="fs-4"> "You need to Gain <span className="fw-bold">{changeWeight.wight} KG"</span> </div>) 
      }
      {
        changeWeight.type=="normal"&&(<div className="fs-4"> "Your weight is normal, Good for You" </div>) 
      }
    </div>
  );
}

export default Bmiscore;
