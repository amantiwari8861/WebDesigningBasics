import { useEffect, useState } from 'react'

const TestUseEffect = () => {
  const [count, setCount] = useState(0);
  const [name,setName]=useState("");
  useEffect(() => {
    console.log("in useEffect Hook count:" + count+" name:"+name);
  // },[]);//only 1 time when our component is loading
  },[count,name]);
  return (
    <div>
      <h1>count :{count}  Name :{name}</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  )
}
export default TestUseEffect