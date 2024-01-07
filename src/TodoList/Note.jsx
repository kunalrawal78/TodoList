import React from "react";
import "./googlekeep.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';

const Note =(props)=>{
    const deleteNote =()=>{
        props.deleteItem(props.id);
    }
    return (
        <>
<div className="note_box">
<h2>{props.title}</h2>

<p>{props.content}</p>
<Button className="btn_remove" onClick={deleteNote}>
    <DeleteOutlineIcon className="deleteicon"/>
</Button>
</div>
        </>
    )
}
export default Note;