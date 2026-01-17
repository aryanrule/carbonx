import React from 'react'
import { Outlet } from "react-router-dom";
import {AdminSidebar} from "../Sidebar/AdminSidebar"


const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar />
      <main className="flex-1 bg-gray-50 p-8">
        <Outlet />
      </main>
    </div>
  )

}

export default AdminLayout