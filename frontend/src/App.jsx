import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FindBlood from "./pages/FindBlood.jsx";
import SOS from "./pages/SOS.jsx";
import Chat from "./pages/Chat.jsx";
import Profile from "./pages/Profile.jsx";
import BloodStock from "./pages/BloodStock.jsx";
import Hospital from "./pages/Hospital.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import BloodDonationChatbot from "./components/BloodDonationChatbot.jsx";

function App() {
  const location = useLocation();
  const hideNav = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="page-wrapper">
      {!hideNav && <Navbar />}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/findblood" element={<FindBlood />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bloodstock" element={<BloodStock />} />
        <Route path="/hospital" element={<Hospital />} />
      </Routes>

      {/* AI Blood Donation Chatbot — Available on all pages */}
      <BloodDonationChatbot />
    </div>
  );
}

export default App;