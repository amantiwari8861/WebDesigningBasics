import phoneimg from './assets/oneplus12.jpeg'
import './test.css'
const Test1 = () => {
  return (
    <>
    <h1 className='highlight'>hello</h1>
    {/* <img src="./assets/oneplus12.jpeg" /> */}
    <img src={phoneimg} height={"200px"} width="200px" alt=''/>
    </>
  )
}

export default Test1
