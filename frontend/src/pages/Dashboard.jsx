import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [stats, setStats] = useState({ donors: 24, saved: 72, urgent: 3, stockUnits: 85 });

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (!u) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    fetch("http://localhost:5000/bloodstock")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const totalUnits = data.reduce((acc, curr) => acc + (Number(curr.total) || 0), 0);
          setStats((prev) => ({ ...prev, stockUnits: totalUnits * 10 || 85, donors: totalUnits || 24 }));
        }
      })
      .catch(() => {});
  }, []);

  const features = [
    {
      icon: "🔍",
      badge: "Fast Match",
      title: "Find Blood",
      desc: "Instant live search across compatible donors near your city.",
      path: "/findblood",
      glow: "var(--glow-crimson)",
      tag: "Urgent search",
    },
    {
      icon: "🚨",
      badge: "Critical 24/7",
      title: "Emergency SOS",
      desc: "Broadcast instant high-priority emergency alerts to blood banks.",
      path: "/sos",
      glow: "var(--glow-rose)",
      tag: "Priority Alert",
      sos: true,
    },
    {
      icon: "📊",
      badge: "Real-Time",
      title: "Blood Stock",
      desc: "Interactive live inventory with all 8 blood type meters.",
      path: "/bloodstock",
      glow: "rgba(59, 130, 246, 0.25)",
      tag: "Live DB Sync",
    },
    {
      icon: "🏥",
      badge: "Verified Hubs",
      title: "Hospitals",
      desc: "Explore verified hospitals, operating hours, and inventory.",
      path: "/hospital",
      glow: "rgba(16, 185, 129, 0.25)",
      tag: "Direct Call",
    },
    {
      icon: "💬",
      badge: "Live Feed",
      title: "Community Chat",
      desc: "Real-time communication with local donors and volunteers.",
      path: "/chat",
      glow: "rgba(139, 92, 246, 0.25)",
      tag: "Interactive",
    },
    {
      icon: "❤️",
      badge: "Save Lives",
      title: "Register Donor",
      desc: "Enroll as a certified hero donor and track your lifesaver badges.",
      path: "/register",
      glow: "var(--glow-crimson)",
      tag: "Be a Hero",
    },
  ];

  return (
    <div className="dashboard-wrapper">
      {/* 3D Glassmorphism Hero Showcase */}
      <section className="hero-3d-section">
        {/* Ambient floating orbs */}
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>

        <div className="hero-3d-container">
          <div className="hero-3d-text-content">
            <div className="hero-pill-badge">
              <span className="live-dot"></span>
              <span>Next-Gen LifeFlow Network • 24/7 Active</span>
            </div>

            <h1 className="hero-3d-title">
              Saving Lives, <br />
              <span className="text-gradient-crimson">One Drop at a Time.</span>
            </h1>

            <p className="hero-3d-desc">
              Welcome back, <strong className="hero-username">{user?.name || "Life Saver"}</strong> 👋
              Connect instantly with verified donors, hospital stock, and emergency networks with zero delay.
            </p>

            <div className="hero-cta-group">
              <button
                className="btn btn-primary btn-3d"
                onClick={() => navigate("/findblood")}
                id="hero-find-blood-btn"
              >
                <span>🔍 Find Donors Now</span>
              </button>
              <button
                className="btn btn-sos-hero"
                onClick={() => navigate("/sos")}
                id="hero-sos-btn"
              >
                <span className="sos-pulse-dot"></span>
                <span>🚨 Emergency SOS</span>
              </button>
            </div>
          </div>

          {/* 3D Animated Showcase Card */}
          <div className="hero-3d-graphic-wrapper">
            <div className="glass-3d-card">
              <div className="glass-3d-drop-container">
                <div className="drop-3d-halo"></div>
                <div className="drop-3d-inner">
                  <span className="drop-emoji">🩸</span>
                </div>
              </div>

              <div className="glass-card-stats-row">
                <div className="mini-stat">
                  <div className="mini-stat-num">{user?.blood_group || "O+"}</div>
                  <div className="mini-stat-lbl">Your Group</div>
                </div>
                <div className="mini-stat-divider"></div>
                <div className="mini-stat">
                  <div className="mini-stat-num">{stats.urgent}</div>
                  <div className="mini-stat-lbl">SOS Active</div>
                </div>
                <div className="mini-stat-divider"></div>
                <div className="mini-stat">
                  <div className="mini-stat-num">100%</div>
                  <div className="mini-stat-lbl">Verified</div>
                </div>
              </div>

              <div className="glass-card-bottom-pill">
                <span className="status-green-dot"></span>
                <span>Network Status: Optimal & Connected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating 3D Stat Counter Bar */}
      <div className="stats-glass-strip">
        <div className="stat-glass-item">
          <div className="stat-glass-icon">👥</div>
          <div className="stat-glass-data">
            <div className="stat-glass-number">{stats.donors}+</div>
            <div className="stat-glass-title">Active Donors</div>
          </div>
        </div>

        <div className="stat-glass-item">
          <div className="stat-glass-icon">💉</div>
          <div className="stat-glass-data">
            <div className="stat-glass-number">{stats.stockUnits} Units</div>
            <div className="stat-glass-title">Blood Available</div>
          </div>
        </div>

        <div className="stat-glass-item">
          <div className="stat-glass-icon">🏥</div>
          <div className="stat-glass-data">
            <div className="stat-glass-number">12+</div>
            <div className="stat-glass-title">Partner Hospitals</div>
          </div>
        </div>

        <div className="stat-glass-item">
          <div className="stat-glass-icon">🛡️</div>
          <div className="stat-glass-data">
            <div className="stat-glass-number">{stats.saved}+</div>
            <div className="stat-glass-title">Lives Impacted</div>
          </div>
        </div>
      </div>

      {/* 3D Glassmorphic Feature Cards Grid */}
      <section className="dashboard-features-section">
        <div className="section-header-modern">
          <div className="section-subtitle">SMART ACCESS</div>
          <h2 className="section-title">Emergency & Donation Services</h2>
          <p className="section-desc">Experience streamlined access to every life-saving utility</p>
        </div>

        <div className="grid-3d-features">
          {features.map((item, index) => (
            <div
              key={index}
              className={`card-3d-glass ${item.sos ? "card-3d-sos" : ""}`}
              onClick={() => item.path && navigate(item.path)}
              role="button"
              tabIndex={0}
              id={`service-card-${index}`}
            >
              <div className="card-3d-glow" style={{ background: item.glow }}></div>
              <div className="card-3d-inner">
                <div className="card-top-meta">
                  <span className="card-badge-pill">{item.badge}</span>
                  <span className="card-tag">{item.tag}</span>
                </div>

                <div className="card-3d-icon-box">
                  <span className="icon-main">{item.icon}</span>
                </div>

                <h3 className="card-3d-title">{item.title}</h3>
                <p className="card-3d-desc">{item.desc}</p>

                <div className="card-3d-action-arrow">
                  <span>Explore service</span>
                  <span className="arrow-sym">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compatibility & Quick Eligibility Interactive Glass Card */}
      <section className="interactive-glass-banner">
        <div className="banner-glass-inner">
          <div className="banner-left">
            <span className="banner-tag">DONOR ELIGIBILITY CHECK</span>
            <h2>Can you donate blood today?</h2>
            <ul className="eligibility-list-modern">
              <li>✅ Age between 18 – 65 years</li>
              <li>✅ Weight at least 50 kg (110 lbs)</li>
              <li>✅ Hemoglobin level ≥ 12.5 g/dL</li>
              <li>✅ Gap of 90 days since previous whole blood donation</li>
            </ul>
          </div>
          <div className="banner-right">
            <div className="blood-matrix-pill">
              <span className="matrix-icon">💡</span>
              <div className="matrix-text">
                <strong>Universal Donors:</strong> O- can donate to anyone. AB+ can receive from all groups!
              </div>
            </div>
            <button
              className="btn btn-primary btn-3d"
              onClick={() => navigate("/bloodstock")}
              style={{ marginTop: "16px", width: "100%" }}
            >
              Check Blood Compatibility Matrix
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;