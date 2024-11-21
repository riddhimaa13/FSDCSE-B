import React, { useState } from 'react'

function UsefetchAPI() {
    const [data,setData] =useState([]);

    const response=fetch("https://dummyjson.com/products");
    response.then((res)=>{
        console.log(res);
        res.json().then((data)=>{
            console.log(data)
            setData(data);

        })
    })
    .catch((error)=>
        console.log(error)
    )

  return (
    <div>UsefetchAPI
        {JSON.stringify(data)}
    </div>
  )
}

export default UsefetchAPI;