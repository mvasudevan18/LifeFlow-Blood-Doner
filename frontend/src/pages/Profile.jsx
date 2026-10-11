import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const details = [
    { icon: "✉️", label: "Email", value: user?.email },
    { icon: "📞", label: "Phone", value: user?.phone },
    { icon: "🩸", label: "Blood Group", value: user?.blood_group },
    { icon: "🎂", label: "Age", value: user?.age || "Not set" },
    { icon: "📍", label: "Location", value: user?.location || "Not set" },
  ];

  return (
    <div className="page-content">
      {/* Page Header */}
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>
        <div className="page-header-text">
          <h1>My Profile</h1>
          <p>Your donor information</p>
        </div>
      </div>

      <div className="profile-page">
        <div className="profile-card">
          {/* Profile Header */}
          <div className="profile-header">
            <div className="profile-avatar">👤</div>
            <h2 className="profile-name">{user?.name || "User"}</h2>
            {user?.blood_group && (
              <div className="profile-blood">
                🩸 Blood Type: {user.blood_group}
              </div>
            )}
          </div>

          {/* Profile Details */}
          <div className="profile-details">
            {details.map((detail, index) => (
              <div className="profile-detail-row" key={index}>
                <div className="profile-detail-icon">{detail.icon}</div>
                <div>
                  <div className="profile-detail-label">{detail.label}</div>
                  <div className="profile-detail-value">
                    {detail.value || "—"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;