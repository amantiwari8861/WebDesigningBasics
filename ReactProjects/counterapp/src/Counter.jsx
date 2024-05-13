import { useState } from "react"
const Counter = () => {
    let [count,setCount]=useState(0);//use state hook
    let inc=()=>{setCount(count+2);}
  return (
    <div>
    <h1>Welcome to our counter App</h1>
    <h2>What is state in react ?</h2>
    <h1>Count : {count}</h1>
    <button onClick={inc}>increment by 2</button>
    <button onClick={()=>setCount(count+1)}>increment</button>
    {/* <button onClick={setCount(count+1)}>error increment</button> */}
    </div>
  )}
export default Counter