import React from 'react'


import Counter from './count';
import  {useDispatch} from "react-redux";
const Main=()=> {

const dispatch=useDispatch();
  return (
    <>
<button onClick={(e)=>dispatch({type:"Add"})}
style={{display:"flex",margin:"auto"}}>Increment</button>
<Counter/>
<button onClick={(e)=>dispatch({type:"Sub"})}
style={{display:"flex",margin:"auto"}}>Decrement</button>


    </>


  );
}

export default Main;






