import React from 'react'
import Student from './Student';
import UseStudentState from './UseStudentState';
import ImageManipulation from './ImageManipulation';
import MyUseEffect from './MyUseEffect';
import UsefetchAPI from './UsefetchAPI';

function App() {

  const  h1=<h1>Hello World!!</h1>;
  const mystyle={
    color:"red",
    backgroundColor:'yellow'
  }

  return (
    <div>
      <h2>Hello using UseState Hook</h2>
      <div>
        {/* <UseStudentState/> */}
         
        {/* <ImageManipulation> */}
        {/* </ImageManipulation> */}
      {/* <MyUseEffect></MyUseEffect> */}
        <UsefetchAPI></UsefetchAPI>


      </div>
    </div>
     );
    }
    
    export default App
//     <div style={{backgroundColor:'cyan'}}>
//       {h1}
    
//     <div style={mystyle}>
//       ABES Engineering College, Ghaziabad
//     </div>
//     <div> 
//       {/* <Student /> */}
//       <Student college="ABES Engineering College"
//       pic={<img src='https://imgs.search.brave.com/oGHj-XRUE17scQ4-Ba3qUmCi9a5fu_L2bvaMc_hXR14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MDM0NTQ1MzcxOTUt/MWRjYWJiNzNmZmI5/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UVjhmR2Rw/Y213bE1qQndhV04w/ZFhKbGZHVnVmREI4/ZkRCOGZId3c' height={100} width={100}/> }
//       name="Riddhima"
//       branch="CSE"
//       roll="23445"
//       section="A"

      
//       />

// <Student college="ABES Engineering College"
//       name="Riddhima"
//       branch="CSE"
//       roll="23445"
//       section="A"

      
//       />
//       <Student college="ABES Engineering College"
//       name="Riddhima"
//       branch="CSE"
//       roll="23445"
//       section="A"
//       />
//       <Student college="ABES Engineering College"
//       name="Riddhima"
//       branch="CSE"
//       roll="23445"
//       section="A"
//       />
//     </div>
//     </div>
 

//rfce -> boilerplate code for jsx