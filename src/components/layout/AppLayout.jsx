import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import {Outlet, useLocation } from "react-router-dom";


const AppLayout = () => {
  const location = useLocation();
  const showSidebar = location.pathname === '/';
  return (
    <div className="flex h-screen">
      <div className="w-[17%] h-full bg-black text-white fixed top-0 left-0 overflow-y-auto">

      <NavBar className="col-span-2" />
      
      </div>
      <div className={`{showSidebar ? "col-span-8" : "col-span-10"} ml-[17%] w-[100%] overflow-y-auto`} >
        <Outlet />
      </div>
      {showSidebar && <Sidebar className="col-span-2" />}
      
    </div>
  );
};

export default AppLayout;
