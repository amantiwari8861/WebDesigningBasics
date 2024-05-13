const TestJSX = () => {
  return (
    <>
        {/* <h1>JSX : javascript syntax extension</h1> */}
        {/* <h2 className="bg-primary">hello</h2> */}
        {/* <h1 style="color:red">hiii</h1> */}
        <h1 style={{color:"red"}}>hiii</h1>
    <h1>{(10+20)>100?"big":"small"}</h1>
    {console.log("hello")}

    {/* <label htmlFor=""></label> */}
    <hr/>
    
    </>
  )
}
export default TestJSX
