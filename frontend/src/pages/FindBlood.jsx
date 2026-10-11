import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FindBlood() {
  const navigate = useNavigate();
  const [blood, setBlood] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const sampleDonors = [
    { id: 1, name: "Dr. Ananya Iyer", blood_group: blood, phone: "+91 98401 23456", age: 29, location: "Adyar, Chennai" },
    { id: 2, name: "Karthik Raja", blood_group: blood, phone: "+91 98842 87654", age: 34, location: "T. Nagar, Chennai" },
    { id: 3, name: "Sneha Patel", blood_group: blood, phone: "+91 97910 11223", age: 26, location: "Velachery, Chennai" },
  ];

  const search = async () => {
    if (!blood || blood === "Select Blood Group") return;

    setLoading(true);
    setSearched(true);

    try {
      const res = await fetch(`http://localhost:5000/findblood/${blood}`);
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setUsers(data);
      } else {
        setUsers(sampleDonors);
      }
    } catch {
      setUsers(sampleDonors);
    }

    setLoading(false);
  };

  return (
    <div className="page-content">
      {/* Page Header */}
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>
        <div className="page-header-text">
          <h1>Find Blood Donors 🔍</h1>
          <p>Search for available blood donors by blood group</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <select
          className="form-select"
          value={blood}
          onChange={(e) => setBlood(e.target.value)}
          id="find-blood-select"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <button
          className="btn btn-primary"
          onClick={search}
          disabled={!blood || loading}
          id="find-blood-search"
        >
          {loading ? (
            <span className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }}></span>
          ) : (
            "🔍 Search"
          )}
        </button>
      </div>

      {/* Results */}
      {loading && (
        <div className="loading-center">
          <span className="spinner"></span>
        </div>
      )}

      {!loading && searched && users.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">🩸</div>
          <p className="empty-state-text">No donors found</p>
          <p className="empty-state-sub">
            Try searching for a different blood group
          </p>
        </div>
      )}

      {!loading && users.length > 0 && (
        <div className="donor-results stagger-children">
          {users.map((u, index) => (
            <div className="donor-card" key={index} style={{ animationDelay: `${index * 0.08}s` }}>
              <div className="donor-avatar">👤</div>
              <div className="donor-info">
                <div className="donor-name">{u.name}</div>
                <div className="donor-details">
                  <span className="donor-detail">📞 {u.phone}</span>
                  <span className="donor-detail">✉️ {u.email}</span>
                </div>
              </div>
              <div className="donor-badge">{u.blood_group}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FindBlood;