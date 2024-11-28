import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainContent from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AppLayout from "./components/layout/AppLayout";

const AppRoutes = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="MainContent" element={<MainContent />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes> 
   </BrowserRouter>
  );
};

export default AppRoutes;
