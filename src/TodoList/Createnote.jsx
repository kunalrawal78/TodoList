import React, { useState } from "react";
import './googlekeep.css';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Createnote=(props)=>{

const [expand,setexpand]=useState(false);

const expandIt=()=>{
    setexpand(true);
}

const backTonormal=()=>{
    setexpand(false);
}


const [note,setnote]=useState({
    title:"",
    content:"",
});
const InputEvent=(event)=>{

    const {name,value} = event.target;

    setnote((prevdata)=>{
        return{
            ...prevdata,
            [name]:value,
        };
        
    });

};

const addEvent =()=>{
    props.passnote(note);
   setnote({
    title:"",
    content:"",
});
}

    return(
        <>
<div className="main_note" onDoubleClick={backTonormal} > 
<form>
{expand ?(
    <input type="text"
    name="title"
     value={note.title}
     onChange={InputEvent}
      placeholder="Title"

      />) :null}

    <textarea  
    name="content"
row=''
column=''
    value={note.content}
     onChange={InputEvent}
    
    
      placeholder="Write a note.."
      onClick={expandIt}
      
      />
      {expand?(
    <Button className="btn" 
    variant="text"
    onClick={addEvent}

     > <AddCircleOutlineIcon className="plus"/> </Button>
     ) :null}
</form>
</div>

        </>
    )
}
export default Createnote;