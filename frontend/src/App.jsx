import "./App.css";

import { useSelector } from "react-redux";
import { Routes, Route  , Navigate } from "react-router-dom";
import Home from "./Major_components/Home.jsx";
import SignUp from "./Major_components/SIgnup.jsx";
import Login from "./Major_components/Login.jsx";
import AdminLayout from "./Major_components/layouts/AdminLayout.jsx";
import UserLayout from "./Major_components/layouts/UserLayout.jsx";
// import {Calc , EntityOnboarding , Scope} from "./Major_components/Pages/Admin";
// import {Dashboard , Reports , Settings } from "./Major_components/Pages/User";
import EntityOnboardin from "./Major_components/Pages/Admin/EntityOnboardin.jsx";
 

import Dashboard from "./Major_components/Pages/User/Dashboard.jsx"
import Reports from "./Major_components/Pages/User/Reports.jsx"
import Settings from "./Major_components/Pages/User/Settings.jsx"
// import Calc from "./Major_components/Pages/Admin/Calc.jsx";
import Calculator from "./Major_components/Pages/Admin/Calculator.jsx";
function App() {
  return (
    <div className="font-semibold  min-h-screen  w-screen  ">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />  
          
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<EntityOnboardin />} />
            <Route path="Calculator" element={<Calculator />} />
            
          </Route>

           <Route path="/user" element={<UserLayout />}>
            <Route index element={<Navigate to="/user/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
               
    </div>
  );
}

export default App;



