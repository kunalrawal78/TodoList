
import React, { useEffect, useState } from "react";


const Lala =()=>{

const [num,setnum]=useState(0);
const [nums,setnums]=useState(0);


useEffect(()=>{
    return alert('hogya bhai tere se 💀')
},[num])
    return(
        <>

 <button 
 onClick={

    (()=>{
    setnum(num+1)
 })

 }
   >Clickme {num}</button>

<br/>
<button 
 onClick={

    (()=>{
    setnums(nums+1)
 })

 }
   >Clickme {nums}</button>

        </>
    )
};
export default Lala;