import React from "react"

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route} from 'react-router-dom';
import Home from './Home'
import Edit from "./Edit";

const Main=()=> {


  return (
    <>
   

   
<div className="container">
<div style={{background:'black'}} ><h1 style={{textAlign:"center",color:'white' }}> 🤣 Meme Generator 😂 </h1> </div>



<Routes>

 <Route path="/" element={<Home/>}/>

 <Route path="/edit/" element = {<Edit/>}/>


</Routes>
 
</div>

    </>


  );
}

export default Main;






