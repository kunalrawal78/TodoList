import React, { useEffect, useState } from "react";

const Changeheading=()=>{

useEffect(()=>{
  
          document.title=`you clicked me ${data}`
     
})

    const [data,setdata]=useState(0);
    const Inc=()=>{
      return  setdata(data + 1);
    }

    return(
        <>
<button onClick={Inc}>click me {data}</button>
        </>
    )
}
export default Changeheading;