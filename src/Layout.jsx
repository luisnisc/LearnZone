import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./App.css"
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div >
      <Navbar/>
    <Outlet/>
    <div style={{position:"fixed",bottom:"0",width:"100%"}}
  ><Footer/></div>
    </div>
  )
}
