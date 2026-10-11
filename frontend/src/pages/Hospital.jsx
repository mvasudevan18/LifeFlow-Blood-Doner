import { useNavigate } from "react-router-dom";

function Hospital() {
  const navigate = useNavigate();

  const hospitals = [
    {
      name: "City General Hospital",
      distance: "1.2 km",
      address: "123 Anna Salai, Chennai",
      phone: "+91 44 2345 6789",
      bloodTypes: ["A+", "O+", "B+", "AB+"],
      hours: "24/7 Emergency",
    },
    {
      name: "LifeCare Blood Bank",
      distance: "2.8 km",
      address: "45 Mount Road, Chennai",
      phone: "+91 44 8765 4321",
      bloodTypes: ["A+", "O+", "AB+", "O-"],
      hours: "8 AM – 10 PM",
    },
    {
      name: "Apollo Blood Center",
      distance: "3.5 km",
      address: "21 Greams Road, Chennai",
      phone: "+91 44 5678 1234",
      bloodTypes: ["A+", "A-", "B+", "B-", "O+", "O-"],
      hours: "24/7",
    },
    {
      name: "Government Blood Bank",
      distance: "5.1 km",
      address: "Park Town, Chennai",
      phone: "+91 44 2567 8900",
      bloodTypes: ["A+", "B+", "O+", "AB+", "AB-"],
      hours: "9 AM – 5 PM",
    },
    {
      name: "Red Cross Blood Center",
      distance: "6.2 km",
      address: "T. Nagar, Chennai",
      phone: "+91 44 3456 7890",
      bloodTypes: ["O+", "O-", "A+", "B+", "AB+"],
      hours: "8 AM – 8 PM",
    },
  ];

  const callHospital = (phone) => {
    window.open(`tel:${phone.replace(/\s/g, "")}`, "_self");
  };

  return (
    <div className="page-content">
      {/* Page Header */}
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>
        <div className="page-header-text">
          <h1>Nearby Hospitals 🏥</h1>
          <p>Find blood banks and hospitals near your location</p>
        </div>
      </div>

      {/* Hospital Cards */}
      <div className="hospital-grid stagger-children">
        {hospitals.map((hospital, index) => (
          <div className="hospital-card" key={index}>
            <div className="hospital-icon">🏥</div>
            <div className="hospital-info">
              <h3 className="hospital-name">{hospital.name}</h3>
              <div className="hospital-meta">
                <span className="hospital-detail">
                  📍 {hospital.address} — {hospital.distance} away
                </span>
                <span className="hospital-detail">
                  🕐 {hospital.hours}
                </span>
                <span className="hospital-detail">
                  📞 {hospital.phone}
                </span>
              </div>
              <div className="blood-tags">
                {hospital.bloodTypes.map((bt) => (
                  <span className="blood-tag" key={bt}>
                    🩸 {bt}
                  </span>
                ))}
              </div>
              <button
                className="btn btn-primary btn-sm"
                style={{ marginTop: "var(--space-4)" }}
                onClick={() => callHospital(hospital.phone)}
              >
                📞 Call Hospital
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hospital;