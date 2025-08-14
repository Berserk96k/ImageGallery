import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import ImageList from './ImageList'

export default function AdminDashBoard() {
  return (
   <div className="flex">
             <Navbar />
             <SideBar />
             <div className=" content flex-1 p-6">
               <h1 className="text-3xl font-bold mb-4">Images</h1>
               <ImageList />
             </div>
           </div>
  )
}
