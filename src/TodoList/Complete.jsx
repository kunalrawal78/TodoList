import React, { useState } from "react";

import Header from './Header'
import Footer from './Footer'
import Createnote from './Createnote'
import Note from "./Note";


const Tasko=()=>{

const [addItem,setAddItem]= useState([]);

const addNote = (note) => {


setAddItem((prevdata)=>{
    return[...prevdata,note]
})

};

const onDelete=(id)=>{
setAddItem((olddata)=>
olddata.filter((curdata,ind)=>{
return ind !=id;
})
)
}
    return ( 
        <>
<Header></Header>
<Createnote passnote={addNote} />

{
addItem.map((val,index)=>{
    return (
        <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
    />)
})}
<Footer/>

        </>
    )
}
export default Tasko;