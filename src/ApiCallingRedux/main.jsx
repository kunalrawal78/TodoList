
import { fetchTodos } from './slice/todo';
import { useDispatch, useSelector } from 'react-redux';
function Main() {
    const dispatch=useDispatch();
    const state =useSelector((state)=>(state));
    console.log('State',state);
    if(state.todo.isLoading){
      return(
        <h2>loading...</h2>
      )
    }
  return (
    <>
      <button onClick={e=>dispatch(fetchTodos())} >Fetch ToDO list</button>
    {   state.todo.data &&
      state.todo.data.map((e)=>(
       <li>{e.title}</li> 
        ))
    }
    </>
    
  )
}

export default Main;