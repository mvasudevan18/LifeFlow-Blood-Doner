import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BloodStock() {
  const navigate = useNavigate();
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultStock = [
    { blood_group: "O+", total: 24 },
    { blood_group: "A+", total: 18 },
    { blood_group: "B+", total: 15 },
    { blood_group: "AB+", total: 8 },
    { blood_group: "O-", total: 6 },
    { blood_group: "A-", total: 4 },
    { blood_group: "B-", total: 3 },
    { blood_group: "AB-", total: 2 },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/bloodstock")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setStock(data);
        } else {
          setStock(defaultStock);
        }
        setLoading(false);
      })
      .catch(() => {
        setStock(defaultStock);
        setLoading(false);
      });
  }, []);

  // All 8 blood groups — show 0 for ones not in DB
  const allGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const stockMap = {};
  stock.forEach((s) => {
    stockMap[s.blood_group] = s.total;
  });

  const totalDonors = stock.reduce((sum, s) => sum + s.total, 0);

  return (
    <div className="page-content">
      {/* Page Header */}
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>
        <div className="page-header-text">
          <h1>Blood Stock 📊</h1>
          <p>Real-time blood availability dashboard</p>
        </div>
      </div>

      {/* Summary Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "var(--space-4)",
          marginBottom: "var(--space-8)",
        }}
        className="stagger-children"
      >
        <div className="stat-card">
          <div className="stat-card-icon">🩸</div>
          <div className="stat-card-value">{totalDonors}</div>
          <div className="stat-card-label">Total Donors</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">📦</div>
          <div className="stat-card-value">{stock.length}</div>
          <div className="stat-card-label">Blood Types Available</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">🌍</div>
          <div className="stat-card-value">3x</div>
          <div className="stat-card-label">Lives Saveable</div>
        </div>
      </div>

      {/* Blood Stock Grid */}
      {loading ? (
        <div className="loading-center">
          <span className="spinner"></span>
        </div>
      ) : (
        <div className="blood-stock-grid stagger-children">
          {allGroups.map((group) => (
            <div className="blood-stock-card" key={group}>
              <div className="blood-group-badge">{group}</div>
              <div className="blood-stock-count">
                {stockMap[group] || 0}
              </div>
              <div className="blood-stock-label">Donors Available</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BloodStock;