import React, { useEffect,useState } from "react"
import {  Routes,Route,Params, useParams,NavLink } from 'react-router-dom';
import About from "./About";

import Contact from "./Contact";
import { Block } from "@mui/icons-material";
import shadows from "@mui/material/styles/shadows";

const Main=()=> {
    const [post,setpost]=useState([]);
  useEffect(()=>{

fetch('https://jsonplaceholder.typicode.com/posts')
.then((data)=>data.json())
.then((data)=>setpost(data));

  },[])
    const Home=()=>{
        return(
          
             <div className="post-cont">
              {
                post.map(
                    (post)=> (<NavLink style={{display:"block",flexDirection:"column",margin:"14px",textAlign:"center",cursor:"pointer",boxShadow:"2px 2px 20px 2px grey",borderRadius:"10px 10px",width:"200px",height:"100px"}} to={`/post/${post.id}`}>{post.title}</NavLink>)
                )
              } 
            </div>  
          
         
        )
    }

    const Postpage=()=>
    {
      const para=useParams();
      const [data,setdata]=useState();
      useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/posts/${para.postId}`)
.then((data)=>data.json())
.then((data)=>setdata(data))
      },[])
      console.log("Data",data);

      if(data==null)return <p>Loading.......</p>
      return(
        <>
          <h2 style={{margin:"10px 20px"}}>Post will be here {para.postId} </h2>
      <h2> Title is here " {data.title}"</h2> 
      <h2>     Id's is here   " {data.id}"</h2>
      <p>Body is here     "{data.body}"</p>
      
 
     
          
        </>
      )
    }


    const Id=()=>{
        return(
            <>
                <h2>Here its Main id page</h2>
            </>
        )
    }
    const Settings=()=>{
        return ( <h1>settings</h1>)
    }

const Username=()=>
{
    const param=useParams();
    console.log(param);
    return (
        <>
            <h1>This is ...UserId's... {param.userId} </h1>
        </>
    )
}


  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/About" element={<About/>} />
    {/* <Route path="/account/mainid" element={<Id/>} /> */}
<Route path="/post/:postId" element={<Postpage/>}/>


<Route path="account">
<Route path="mainid" element={<Id/>} />
<Route path="setting" element={<Settings/>} />
<Route path="/account/:userId" element={<Username/>}/> //dynamic router
</Route>


    </Routes>

    </>


  );
}

export default Main;