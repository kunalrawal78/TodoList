import React, { useEffect, useState } from "react";
import axios from "axios";


const Pokemon=()=>{
    const [num,setnum]=useState();
const [name,setname]=useState();
const [move,setmove]=useState();
useEffect(()=>{
    // alert("hello")
    async function getData(){
        const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(res.data.order);
        setname(res.data.name);
        setmove(res.data.order);
    }
    getData();
})


    return(
        <>
<h1>Pokemon is <span style={{color:"green"}} > {name}</span> </h1>
<h1>Number of moves <span style={{color:"green"}}> {move} </span> </h1>

<h1>selected is {num}</h1>

<select value={num} onChange={(data)=>{
  
    setnum(  data.target.value)
}}>
    <option value='1'>1</option>
    <option value='3'>3</option>
    <option value='5'>5</option>
    <option value='100'>100</option>
    <option value='99'>99</option>
    <option value='11'>11</option>

</select>
        </>
    )
}
export default Pokemon;