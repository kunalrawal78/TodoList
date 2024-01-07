
import React, { useEffect, useState } from "react";
import MemeCard from "../Component/MemeCard";
import {getallmeme} from '../memApi/meme'
import './home.css'
const Home=()=>{
    const [data,setdata]=useState([]);

useEffect(()=>{

getallmeme().then((memes)=>setdata(memes.data.memes));
},[])

    return (
        
<div className="row" style={{margin:"auto",alignItems:'center'}} >

{
    data.map(el => <MemeCard 
    img = {el.url}
    key={el.url} 
    title={el.name} 
 />   )
}
 
</div>

     
    )
}
export default Home;