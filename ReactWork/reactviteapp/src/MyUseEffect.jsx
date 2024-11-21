import React, { useEffect, useState } from 'react'

function MyUseEffect() {

    const [count,setcount]=useState(10);
    const[pointer,setPointer,]=useState(20);


    useEffect(()=>{
        console.log("Updated Count:",count)
        console.log("Updated Pointer:",pointer)

    },[count])

    function DoIncrement()
    {
        setcount((count+20));
    }
    function DoDecrement()
    {
        setcount((count-20));
    }
    function doPointer()
    {
        setPointer(pointer+100);

    }

  return (
    <div>
        <h2>{count}</h2>
        <h2>{pointer}</h2>
        <button onClick={DoIncrement}>Increment</button>
        <button onClick={DoDecrement}>Decrement</button>
        <button onClick={doPointer}>Pointer</button>
        
    </div>
  )
}

export default MyUseEffect;