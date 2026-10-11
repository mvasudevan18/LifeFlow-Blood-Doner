import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast.jsx";

function SOS() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    phone: "",
    blood_group: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendSOS = async () => {
    if (!data.name || !data.phone || !data.blood_group || !data.message) {
      setToast({ message: "Please fill all SOS details", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/sos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setToast({ message: "🚨 SOS Request sent successfully!", type: "success" });
        setData({ name: "", phone: "", blood_group: "", message: "" });
      } else {
        setToast({ message: "Failed to send SOS", type: "error" });
      }
    } catch {
      setToast({ message: "Server error. Please try again.", type: "error" });
    }

    setLoading(false);
  };

  return (
    <div className="page-content">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Page Header */}
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>
        <div className="page-header-text">
          <h1>Emergency SOS 🚨</h1>
          <p>Send an urgent blood request to nearby donors</p>
        </div>
      </div>

      <div className="sos-page">
        {/* Emergency Banner */}
        <div className="sos-banner">
          <span className="sos-banner-icon">🚨</span>
          <h3 className="sos-banner-title">Need Blood Urgently?</h3>
          <p className="sos-banner-text">
            Fill in the details below and we'll alert all nearby donors immediately.
          </p>
        </div>

        {/* SOS Form */}
        <div className="sos-form-card">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Patient Name *</label>
              <input
                className="form-input"
                name="name"
                placeholder="Patient's full name"
                value={data.name}
                onChange={handleChange}
                id="sos-name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                className="form-input"
                name="phone"
                placeholder="+91 98765 43210"
                value={data.phone}
                onChange={handleChange}
                id="sos-phone"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Blood Group Needed *</label>
            <select
              className="form-select"
              name="blood_group"
              value={data.blood_group}
              onChange={handleChange}
              id="sos-blood-group"
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
          </div>

          <div className="form-group">
            <label className="form-label">Emergency Message *</label>
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Describe the emergency — hospital name, units needed, urgency level..."
              value={data.message}
              onChange={handleChange}
              id="sos-message"
            ></textarea>
          </div>

          <button
            className="btn btn-sos btn-block"
            onClick={sendSOS}
            disabled={loading}
            id="sos-submit"
          >
            {loading ? (
              <>
                <span className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }}></span>
                Sending SOS...
              </>
            ) : (
              "🚨 Send Emergency SOS"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SOS;