import React from "react";
import CompA from "./CompA";

import { createContext } from "react";

const FirstName =createContext();
const LastName=createContext();

const App1 =()=> {
    return (
      <>
      <FirstName.Provider value={"Krsna"} >
      <LastName.Provider value={"Radha"} >
       <CompA/> 
       </LastName.Provider>
       </FirstName.Provider>

      </>
    );
  }
  
  export default App1;
  export {FirstName,LastName} ;