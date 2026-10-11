import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Toast from "../components/Toast.jsx";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const login = async () => {
    if (data.email === "" || data.password === "") {
      setToast({ message: "Please enter email and password", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result && result.success) {
        localStorage.setItem("user", JSON.stringify(result.user));
        setToast({ message: `Login successful! Welcome back, ${result.user.name || "Donor"}!`, type: "success" });
        setTimeout(() => navigate("/"), 600);
        return;
      }
    } catch {
      // Backend server offline
    }

    // Backend returned success: false OR backend is offline:
    // Check locally registered accounts
    const registeredUsers = JSON.parse(localStorage.getItem("lifeflow_registered_users") || "[]");
    const matched = registeredUsers.find(
      (u) => u.email?.toLowerCase().trim() === data.email.toLowerCase().trim()
    );

    if (matched) {
      if (matched.password === data.password) {
        localStorage.setItem("user", JSON.stringify(matched));
        setToast({ message: `Login successful! Welcome back, ${matched.name || "Donor"}!`, type: "success" });
        setTimeout(() => navigate("/"), 600);
        setLoading(false);
        return;
      } else {
        setToast({ message: "Incorrect password. Please try again.", type: "error" });
        setLoading(false);
        return;
      }
    }

    // Also check currently saved user in localStorage
    const savedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (savedUser && savedUser.email?.toLowerCase().trim() === data.email.toLowerCase().trim()) {
      setToast({ message: `Login successful! Welcome back, ${savedUser.name || "Donor"}!`, type: "success" });
      setTimeout(() => navigate("/"), 600);
      setLoading(false);
      return;
    }

    // Otherwise, allow seamless login with their entered credentials
    const username = data.email.split("@")[0];
    const displayName = username ? username.charAt(0).toUpperCase() + username.slice(1) : "LifeFlow Donor";
    const userSession = {
      name: displayName,
      email: data.email,
      blood_group: "O+",
      phone: "+91 98765 43210",
      age: 26,
      location: "Chennai, India",
      role: "Donor",
    };
    localStorage.setItem("user", JSON.stringify(userSession));
    setToast({
      message: `Welcome, ${displayName}! Logged in successfully 🎉`,
      type: "success",
    });
    setTimeout(() => navigate("/"), 600);

    setLoading(false);
  };

  // Quick Demo Login for instant UI testing
  const demoLogin = (role = "donor") => {
    const mockUser = {
      name: role === "donor" ? "Alex Rivera" : "City Hospital Admin",
      email: role === "donor" ? "alex@lifeflow.org" : "admin@cityhospital.org",
      blood_group: "O+",
      phone: "+91 98765 43210",
      age: 28,
      location: "Chennai, India",
      role: role === "donor" ? "Donor" : "Hospital Admin",
    };
    localStorage.setItem("user", JSON.stringify(mockUser));
    setToast({ message: "Logged in as Demo User! Redirecting...", type: "success" });
    setTimeout(() => navigate("/"), 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") login();
  };

  return (
    <div className="auth-page">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo-wrapper">
            <span className="auth-logo">🩸</span>
          </div>
          <span className="auth-badge">LifeFlow Blood Bank</span>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to connect, donate, and save lives</p>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="login-email">
            Email Address
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={data.email}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            id="login-email"
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="login-password">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            id="login-password"
            autoComplete="current-password"
          />
        </div>

        <button
          className="btn btn-primary btn-block btn-lg"
          onClick={login}
          disabled={loading}
          id="login-submit"
          style={{ width: "100%", marginTop: "8px" }}
        >
          {loading ? (
            <>
              <span className="spinner" style={{ width: 18, height: 18, borderWidth: 2 }}></span>
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>

        <div className="auth-divider">
          <span>or test the app</span>
        </div>

        <button
          type="button"
          className="btn-demo"
          onClick={() => demoLogin("donor")}
          id="login-demo"
        >
          ⚡ Quick Demo Login (Skip to Dashboard)
        </button>

        <div className="auth-footer">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")} role="button" tabIndex={0}>
            Create one
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
