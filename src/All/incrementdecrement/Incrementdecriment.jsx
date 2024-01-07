import React, { useState } from "react"; 
import './Incrementdecrement.css'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


import Button from '@mui/material/Button';
const Numb=()=>{

const [value,setvalue]=useState(0);
const Changeradd=()=>{
   setvalue(value + 1); 
return (value);

}
const Changersub=()=>{
    if(value>0){
      setvalue(value - 1);   
      return (value); 
    }
    else{
alert("Can't go Below 0");
    }
   
   
}
    return(
        <>
     <div className="main">
      <div className="box">
      <br/>
      <h1>Add or Subtract </h1>
      <br/>
      <h1 >{value}</h1>
      <div className="btn_div">
         <Button className="btn_add" onClick={Changeradd}  >

       <AddIcon/>
       </Button>
 
       <Button className="btn_remove" onClick={Changersub} >

       <RemoveIcon/>
       </Button>    
      </div>
  
   
   
      </div>


     </div>
        </>
    );

}
export default Numb;