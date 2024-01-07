import React,{useState}from "react";
import Draggable from 'react-draggable';


const Text =()=>{
    const [editmode,seteditmode]=useState(false);
const [val,setval]=useState("Double click to edit");
  

    return(
        <>
       < Draggable>
{
editmode ? <input onDoubleClick={(e)=>(seteditmode(false))}
 value={val}  
 onChange={(e)=>{
   setval(e.target.value)
}}/>
 : (<h2 onDoubleClick={(e)=>seteditmode(true)}>{val}</h2>)
}
       
       </Draggable>

        </>
    );
}
export default Text;