import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast.jsx";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    blood_group: "",
    password: "",
    age: "",
    location: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const register = async () => {
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.password ||
      !data.blood_group ||
      data.blood_group === "Select Blood Group"
    ) {
      setToast({ message: "Please fill all required fields", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      const saveAccount = () => {
        localStorage.setItem("user", JSON.stringify(data));
        const list = JSON.parse(localStorage.getItem("lifeflow_registered_users") || "[]");
        const updated = list.filter((u) => u.email?.toLowerCase() !== data.email.toLowerCase());
        updated.push(data);
        localStorage.setItem("lifeflow_registered_users", JSON.stringify(updated));
      };

      if (result && result.message === "User Registered") {
        saveAccount();
        setToast({ message: `Account created! Welcome, ${data.name || "Donor"} 🎉`, type: "success" });
        setTimeout(() => navigate("/"), 800);
      } else {
        saveAccount();
        setToast({ message: `Account created! Welcome, ${data.name || "Donor"} 🎉`, type: "success" });
        setTimeout(() => navigate("/"), 800);
      }
    } catch {
      localStorage.setItem("user", JSON.stringify(data));
      const list = JSON.parse(localStorage.getItem("lifeflow_registered_users") || "[]");
      const updated = list.filter((u) => u.email?.toLowerCase() !== data.email.toLowerCase());
      updated.push(data);
      localStorage.setItem("lifeflow_registered_users", JSON.stringify(updated));

      setToast({ message: `Account created! Welcome, ${data.name || "Donor"} 🎉`, type: "success" });
      setTimeout(() => navigate("/"), 800);
    }

    setLoading(false);
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

      <div className="auth-card" style={{ maxWidth: 480 }}>
        <div className="auth-header">
          <div className="auth-logo-wrapper">
            <span className="auth-logo">🩸</span>
          </div>
          <span className="auth-badge">Join LifeFlow</span>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join LifeFlow and start saving lives</p>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              className="form-input"
              name="name"
              placeholder="John Doe"
              value={data.name}
              onChange={handleChange}
              id="register-name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Age</label>
            <input
              className="form-input"
              name="age"
              type="number"
              placeholder="25"
              value={data.age}
              onChange={handleChange}
              id="register-age"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input
            className="form-input"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={data.email}
            onChange={handleChange}
            id="register-email"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Phone Number *</label>
            <input
              className="form-input"
              name="phone"
              placeholder="+91 98765 43210"
              value={data.phone}
              onChange={handleChange}
              id="register-phone"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Blood Group *</label>
            <select
              className="form-select"
              name="blood_group"
              value={data.blood_group}
              onChange={handleChange}
              id="register-blood-group"
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Location</label>
          <input
            className="form-input"
            name="location"
            placeholder="City, State"
            value={data.location}
            onChange={handleChange}
            id="register-location"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password *</label>
          <input
            className="form-input"
            name="password"
            type="password"
            placeholder="Create a strong password"
            value={data.password}
            onChange={handleChange}
            id="register-password"
          />
        </div>

        <button
          className="btn btn-primary btn-block btn-lg"
          onClick={register}
          disabled={loading}
          id="register-submit"
        >
          {loading ? (
            <>
              <span className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }}></span>
              Creating account...
            </>
          ) : (
            "Create Account"
          )}
        </button>

        <div className="auth-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default Register;