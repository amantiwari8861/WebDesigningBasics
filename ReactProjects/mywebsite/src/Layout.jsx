import React from 'react'
import Header from './components/header/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Aside from './components/Aside'
const Layout = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <Main />
          </div>
          <div className="col-3">
            <Aside />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
