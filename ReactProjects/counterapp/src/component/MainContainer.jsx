import React from 'react'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  return (
    <div className='container'>
      <Outlet/>
    </div>
  )
}

export default MainContainer
