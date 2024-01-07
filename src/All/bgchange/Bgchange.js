import React, { useState } from "react";
import './App.css'

const Bgchange =()=>{
  const blue=" #279EFF";

 const [bg,setbg] = useState(blue);
 const [title,settitle]=useState('click me');

 const Update=()=>{

let newbg= '#F7E987';
setbg(newbg);
settitle('OH MY GOD🤩!');

};

const bgBack=()=>{
setbg(blue);
  settitle('click here');
  };


return(


 


    <>
<div style={{background:bg}}>
  <button onClick={Update} onDoubleClick={bgBack}>{title}</button>
</div>
     
    </>
  );
}
  

export default Bgchange;