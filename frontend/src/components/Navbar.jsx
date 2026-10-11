import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navItems = [
    { path: "/", icon: "🏠", label: "Home" },
    { path: "/findblood", icon: "🔍", label: "Find Blood" },
    { path: "/bloodstock", icon: "📊", label: "Blood Stock" },
    { path: "/sos", icon: "🚨", label: "SOS" },
    { path: "/hospital", icon: "🏥", label: "Hospitals" },
    { path: "/chat", icon: "💬", label: "Chat" },
    { path: "/profile", icon: "👤", label: "Profile" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand" onClick={() => navigate("/")}>
        <span className="brand-icon">🩸</span>
        <span className="brand-text">LifeFlow</span>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-nav ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            onClick={() => {
              navigate(item.path);
              setMenuOpen(false);
            }}
          >
            <span className="nav-link-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
        {user && (
          <button className="nav-btn-logout" onClick={logout}>
            🚪 Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
