import React, { useState } from 'react'

function UsefetchAPI() {
    const [data,setData] =useState([]);
    function getData()
    {
        const response=fetch("https://dummyjson.com/recipes");
        response.then((res)=>{
            console.log(res);
            res.json().then((data)=>{
                console.log(data.recipes)
                setData(data.recipes);
    
            })
        })
        .catch((error)=>
            console.log(error)
        )

    }

  

  return (
    <div>UsefetchAPI
        {/* {JSON.stringify(data)} */}
        <button onClick={getData}>Fetch Data</button>
        {
            data.map((ele)=>{
                // console.log(ele);
                return(
                    <div style={{}}>
                    <div>
                        <img src={ele.image} height={100} width={200}/>
                    <div>{ele.name}</div>
                    </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UsefetchAPI;