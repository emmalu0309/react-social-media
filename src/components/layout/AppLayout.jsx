import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
// import MainContent from "./MainContent";

const AppLayout = () => {
  const location = useLocation();
  const showSidebar = location.pathname === '/';
  return (
    <div className="grid grid-cols-12  w-full h-screen">
      <Header className="col-span-2" />
      <div className={showSidebar ? "col-span-8" : "col-span-9"}>
        <div> Outlet在這裡這裡這裡我在這................</div>
        <Outlet />
      </div>
      {showSidebar && <Sidebar className="col-span-2" />}
    </div>
  );
};

export default AppLayout;
