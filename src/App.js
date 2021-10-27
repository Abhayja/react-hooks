import React from 'react'
import {useState} from "react";



export default function App() {
  let [count,setCount] = useState(1)
  return (
    <div className="App">
      <div>React Hooks{count}</div>
      <button
      onClick={()=>{setCount(count+1);}} >Click ME</button>
      
              </div>
  );
}




