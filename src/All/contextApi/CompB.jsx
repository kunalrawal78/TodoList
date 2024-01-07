import React, { useContext } from "react";
import CompC from "./CompC";

import { FirstName,LastName } from "./App1";


const CompB=()=>{

const fname =useContext(FirstName);
const lname =useContext(LastName);


    return(
        <>
<h1>{fname} {lname} This is helpfull </h1>
<CompC></CompC>
        </>
    )
}
export default CompB;