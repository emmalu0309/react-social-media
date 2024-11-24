import { Routes, Route } from "react-router-dom";
import MainContent from "./components/layout/MainContent";
import ProfilePage from "./components/profile/ProfilePage";
import AppLayout from "./components/layout/AppLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<MainContent />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes> 
  );
};

export default AppRoutes;
