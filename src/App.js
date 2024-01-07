import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './ApiCallingRedux/main';
import { Provider } from 'react-redux';
import {store} from './ApiCallingRedux/store'
import Accord from './Accordion/Acoordin';
import Tasko from './TodoList/Complete';
const App=()=> {


  return (
    <>
    <Provider store={store}/>
<Tasko/>


    </>


  );
}

export default App;






