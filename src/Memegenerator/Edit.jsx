import Button from 'react-bootstrap/Button';

import Text from './text';


import React, { useState,createRef } from "react";
import {useSearchParams} from "react-router-dom"
import { exportComponentAsPNG } from 'react-component-export-image'
import './home.css'

const Edit=()=>{

const [param]=useSearchParams();

// console.log(param.get('url'))

const [count ,setCount]= useState(0);
const memeRef=createRef();

const addText=()=>{
    setCount(count + 1);

};

    return(
<div> 
<div ref={memeRef}   >
       <img width="300" height="300" 
    
       src={param.get('url')}
       alt="Image Description" />  

    {
       Array(count).fill(0).map((e) => (<Text />))
    }
</div>
  <Button variant="primary"
     onClick={addText}
  > Add Text</Button>

  <Button variant='success' style={{margin:"15px"}}  onClick={(e)=> (exportComponentAsPNG(memeRef))}>Save Meme</Button>

 </div>

    

    )
}
export default Edit;