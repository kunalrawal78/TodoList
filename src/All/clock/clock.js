import React, { useState } from "react";
import './App.css'
const Clock =()=>{

let Time= new Date().toLocaleTimeString();

const  [ctime,setctime]=useState(Time);

const Updatetime =()=>{
  Time= new Date().toLocaleTimeString();
  setctime(Time);
};

setInterval(Updatetime,1000);

  return(
    <>
    
        <h1 >{ctime}</h1>

    </>
  )
}
export default Clock;