import { useState } from 'react'

const Main = () => {
  let [count,setCount]=useState(0); //array destructuring 
  let increment=()=>{
    setCount(count+1)
  }
  return (
    <main>
      Hello i am main
      <h1>States = variables = data</h1>
      <h1>Count : {count}</h1>
      <button className='btn btn-primary' onClick={increment}>increment</button>
    </main>
  )
}
export default Main