import React,{useState}from 'react'

function UseStudentState() {
    const [count,setCount]=useState(20);

    function doIncrement(){
        console.log("Inside do Increment!");
        setCount((count+1));
    
    }
    function doDecrement(){
        console.log("Inside do Decrement!");
        setCount((count-1));
    }
  return (
    <>

    <div style={{fontSize:'50px',scolor:'red',border:'2px solid red ',height:'300px',width:'200px',marginLeft:'200px',backgroundColor:'black'}}>{count}
    
    <div>
        <button id='btn' onClick={doIncrement} style={{backgroundColor:'#F34CCD'}}>
            Increment Counter
        </button>
        <button id='dec-btn' onClick={doDecrement} style={{backgroundColor:'yellow'}}>Decrement</button>
    </div>
</div>
    </>
    
  
);
}

export default UseStudentState;