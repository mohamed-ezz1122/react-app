import React from 'react'
import Navebare from '../Navebare/Navebare'
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return <>
  <Navebare/>
<div className="vw-100 ">

  <Outlet></Outlet>
</div>
   
  <Footer/>
  
  </>
}
