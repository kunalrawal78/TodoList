import React, { useState } from "react";
import "./Showdatainput.css";




const Showdatainput =()=>{
const onSubmit=(event)=>{
    event.preventDefault();
    alert('Form submited');
}


const [fullName,setfullName]=useState({
    fname: "",
    lname: "",
    email:'',
    number:'',
});




const inputEvent=(data)=>{

console.log(data.target.value);
console.log(data.target.name);
 
  // const value =data.target.value;
  // const name=data.target.name;

const {name,value} = data.target;

  setfullName((prevValue)=>{
console.log(prevValue);

return{
  ...prevValue,
  [name]:value,
};
// if(name ==='fName'){
//   return{
//     fname:value,
//   lname:prevValue.lname, 
//   email:prevValue.email,
//   number:prevValue.number,
//   };
 
// }
// else if(name ==='lName'){
//     return{
//       fname:prevValue.fname ,
//     lname:value, 
//     email:prevValue.email,
//     number:prevValue.number,
//     };
   
//   }

//   else if(name ==='email'){
//     return{
//       fname:prevValue.fname ,
//     lname:prevValue.lname, 
//     email:value,
//     number:prevValue.number,
//     };
   
//   }
//   else if(name ==='number'){
//     return{
//       fname:prevValue.fname ,
//     lname:prevValue.lname, 
//     email:prevValue.email,
//     number:value,
//     };
   
//   }

  });
};





  return(
<>
  <div>
  <form onSubmit={onSubmit} >

 <h1> Hello {fullName.fname} {fullName.lname} </h1>
<p>{fullName.email}</p>
<p> {fullName.number}</p>
    <input type="text" placeholder="enter your name" 
    name="fName"
    onChange={inputEvent}
    value={fullName.fname}
    ></input>

<input type="text" placeholder="enter your lastname" 
  name="lName"
onChange={inputEvent}
    value={fullName.lname}
    ></input>

<input type="email" placeholder="enter your email" 
  name="email"
onChange={inputEvent}
    value={fullName.email}
    ></input>

<input type="number" placeholder="enter your lastname" 
  name="number"
onChange={inputEvent}
    value={fullName.number}
    ></input>

    <button type="submit " onClick={onSubmit}
    >Submit 🚗</button>


  </form>
   
  </div>
</>
  );
}
export default Showdatainput;