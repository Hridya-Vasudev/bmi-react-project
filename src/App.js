
import { useState } from 'react';
import './App.css';
import BmiList from './components/bmiList';
import Bmiscore from './components/bmiscore';
import Form from './components/Form';
// import Form from './components/Form';

function App() {
  const[show,setShow]=useState(false);
  const [changeWeight,setChangeWeight]=useState({wight:"", type:""});
  const [bmi, setbmi] = useState("00");
  const [bmiType, setbmiType] = useState("Not Calculated");
  const[bmiRange,setBmiRange]=useState({
    underWeight:{low:" "},
    overWeight:{low:" "},
    normal:{low:" ", high:" "},
    obesityOne:{low:" ", high:" "},
    obesityTwo:{low:" ",high:" "},
    obesityThree:{high:" "},
  });

  const onFormSub = (w, h) => {
    let b=calBmi(w,h);
    setbmi(b);
    // let bType=WeightType(b)
    setbmiType(WeightType(b))
    console.log(w, h);
    const range={
      underWeight:{low:calweight(18.5,h)},
      normal:{low:calweight(18.5,h),high:calweight(24.9,h)},
      overWeight:{low:calweight(25,h),high:calweight(29.9,h)},
      obesityOne:{low:calweight(30,h),high:calweight(34.9,h)},
      obesityTwo:{low:calweight(35,h),high:calweight(39.9,h)},
      obesityThree:{ high:calweight(40,h)},
    };
    setBmiRange(range);
    setChangeWeight(weightChange(b,w,range));
    setShow(true);
  };
  // const calBmi=(w,h)=>{
  //   return(w/(h*h)).toFixed(2);
  // };
  const calBmi=(w,h) => (w/(h*h)).toFixed(2);
  const calweight=(b,h)=>(b*h*h).toFixed(2)
  const weightChange=(b,w,range)=>{
    let changeObj;
    if(b>24.9){
      changeObj={
        wight:(w-range.normal.high).toFixed(2),
        type:"positive",
      };
      return changeObj;
    }
    else if(b<18.5){
      changeObj={
        wight:(range.normal.low-w).toFixed(2),
        type:"negative",
      };
      return changeObj;
    }
    else{
      changeObj={
        wight:0,type:"normal"
      };
      return changeObj;
    }
  };
  const WeightType=(bmi)=>{
    if(bmi<18.5){
      return "underweight";
    }else if(18.5<bmi &&bmi<24.9){
      return "Normal";
    }else if(24.9<bmi &&bmi<29.9){
      return "over Weight";
    }else if(29.9<bmi &&bmi<34.9){
      return "obesity class1";
    }else if(34.9<bmi &&bmi<39.9){
      return "obesity class2";
    }else if(bmi>39.9){
      return "obesity class 3";
    }
  };
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mt-5 mx-2'></div>

        <Form getData={onFormSub} />
        {show && (
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-sm-6 mb-5">
            <Bmiscore bmiNo={bmi} bmiName={bmiType} changeWeight={changeWeight} />
            
          </div>
          <BmiList range={bmiRange} bmi={bmi}/>
          <div className="col-12 col-sm-6">

          </div>
        </div>
         )};
      </div>
       
     
    </>
  );
}

export default App;