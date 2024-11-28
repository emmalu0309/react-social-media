import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import MainContent from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MessagesPage from "./pages/MessagePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="MainContent" element={<MainContent />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="message" element={<MessagesPage />} />
        </Route>
    
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
