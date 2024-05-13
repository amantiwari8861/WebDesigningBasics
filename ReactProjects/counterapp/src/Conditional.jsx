// import React, { useState } from 'react'
// const Conditional = () => {
//     let [isUserLoggedIn,setUserLoggedIn]=useState(false);
//   return (
//     <div>
//       {/* {(10+20)>10 ? "big" : "small"} */}
//       {/* {(10)>10 ? <Greater/> : <Smaller/>} */}
//       <h1>{isUserLoggedIn?<LoggedIn/>:<NotLogged/>}</h1>
//       <button onClick={()=>setUserLoggedIn(true)}>Log in</button>
//     </div>)
// }
// export default Conditional
// let LoggedIn=()=><h1>Hello Aman Sir</h1>
// let NotLogged=()=><h1>Hello User</h1>
// // let Greater=()=><h1>the value is greater</h1>
// // let Smaller=()=><h1>the value is smaller</h1>



import React, { useState } from 'react'

const Conditional = () => {
    let [names,setNames]=useState(["kunal","vanshita","vanshika","vishnu","etc"]);
  return (
    <div>
      <ol>
        {names.map((name,i)=><li key={i}>{name}</li>)}
      </ol>
    </div>
  )}
export default Conditional


// JSX  {}
