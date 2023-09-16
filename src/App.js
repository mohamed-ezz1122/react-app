import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portpholio from './components/Portpholio/Portpholio'
import Contect from './components/Contect/Contect'


let routers=createBrowserRouter([
  {path:"", element:<Layout/>, children:[
    {path:"/",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portpholio",element:<Portpholio/>},
    {path:"contect",element:<Contect/>},
    ``
  ]}
])

export default function App() {
  return <RouterProvider router={routers}> </RouterProvider>

}
