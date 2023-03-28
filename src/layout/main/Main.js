import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
const Main = () => {
  return (
      <>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
 </>
  )
}
export default Main