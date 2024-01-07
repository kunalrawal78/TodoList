import React from "react";
import { useSelector } from "react-redux";

const Counter =()=>{
    const count = useSelector((state)=>state);
    return (
        <>
<h1 style={{textAlign:'center'}}>{count}</h1>
        </>
    )
}
export default Counter;