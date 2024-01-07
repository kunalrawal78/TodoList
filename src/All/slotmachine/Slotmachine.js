import './Slotmachine.css'

const SlotM =(props)=>{
    // let x='😁';
    // let y='😁';
    // let z='😁';
    let x=props.x;
    let y=props.y;
    let z=props.z;
  
    if((x==y) && (y==z)){
      return(
        <div className="winner" style={{textAlign:'center'}}>
        <h1>
          {x} {y} {z}
        </h1>
          <h1>You Won the Game!!!</h1>
        </div>
      )
    }
    else{
      return(
        <div className="winner" style={{textAlign:'center'}}>
        <h1>
          {x} {y} {z}
        </h1>
          <h1>You lose the Game!!!</h1>
        </div>
      )
    }
  
  }
  const Smachine=()=>{
    return(
      <>
        <h1 className="heading"> 🎰 Welcome to <span style={{fontWeight:"bold",fontSize:"30px"}}> Slot Machine Game</span> 🎰  </h1>
     <div className="slotmachine" >
    
     <SlotM 
      x='😎' y='😎' z='😎'
     />
     <SlotM
      x='😎' y='🥳' z='😎'
     />
     <SlotM
      x='🥳' y='🥳' z='🥳'
     />
     </div>
    
      </>
    
    )
    };
  export default Smachine;