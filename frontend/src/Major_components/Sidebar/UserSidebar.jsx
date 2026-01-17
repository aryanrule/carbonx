import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileText, Settings, LogOut } from "lucide-react";

const menuItems = [
  { title: "Dashboard", path: "/user/dashboard", icon: LayoutDashboard },
  { title: "Reports", path: "/user/reports", icon: FileText },
  { title: "Settings", path: "/user/settings", icon: Settings },
];

export function UserSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast("logout feature add nhii kiya");
    // navigate("/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-[#2E8B57] via-[#3CB371] to-[#66CDAA] text-white flex flex-col">
      
      {/* Header */}
      <div className="p-6 border-b border-white/20">
        <h2 className="text-2xl font-bold tracking-tight">User</h2>
        <p className="text-sm text-white/70 mt-1">Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                 hover:bg-white/20
                 ${isActive ? "bg-white/30 shadow-lg" : ""}`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/20">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-all duration-200 hover:bg-white/20 text-white/90"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
