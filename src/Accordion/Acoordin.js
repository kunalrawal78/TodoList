import React, { useState } from "react";
import { Question } from "./api";
import './accordion.css';
import MyAccordion from "./myAccordion";

const Accord=()=>{
  const [data,setData]=useState(Question);
  return(
    <>
    <div className="outer_cont">
         <h2>Interview Question</h2>

          {
        data.map((curElement)=>{
          const {id}=curElement;
     return (<MyAccordion key={id} {...curElement}/>)  })
      }  
    </div> 
   

   

    </>
  )
}
export default  Accord;