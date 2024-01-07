import React, { useState } from "react";
import "./clicktoadd"



const Clicktoadd=()=>{

const state =useState();
// console.log(state);

const [count,setCount]=useState(0);


const IncNum =() =>{

setCount(count + 1);
  // console.log("clicked >>>" + count++);
return (count);

}



return(
  <>
  <div className="box">
    <h1 className="heading">{count}</h1>
<button onClick={IncNum}>Click to Add</button>

  </div>
  </>

)
};
export default Clicktoadd;