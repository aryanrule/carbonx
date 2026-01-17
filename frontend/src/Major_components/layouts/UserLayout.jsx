import { Outlet } from "react-router-dom";
import { UserSidebar } from "../Sidebar/UserSidebar";  


const UserLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <UserSidebar />
      <main className="flex-1 bg-gray-50 p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default UserLayout