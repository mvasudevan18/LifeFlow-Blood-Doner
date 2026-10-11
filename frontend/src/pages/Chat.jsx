import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useState({
    name: user?.name || "",
    message: "",
  });

  const initialDemoChats = [
    { name: "Rahul S.", message: "Urgent need for O+ blood in Adyar area today." },
    { name: "Priya M.", message: "I am available to donate O+ in Adyar! Connecting now." },
    { name: "Dr. Arvind", message: "Donation camp active at City General Hospital until 4 PM." },
  ];

  const [chats, setChats] = useState(() => {
    const local = JSON.parse(localStorage.getItem("lifeflow_chats") || "null");
    return Array.isArray(local) ? local : initialDemoChats;
  });
  const [sending, setSending] = useState(false);

  const loadChat = () => {
    fetch("http://localhost:5000/chat")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setChats(data);
          localStorage.setItem("lifeflow_chats", JSON.stringify(data));
        } else {
          const local = JSON.parse(localStorage.getItem("lifeflow_chats") || "null");
          setChats(Array.isArray(local) ? local : initialDemoChats);
        }
      })
      .catch(() => {
        const local = JSON.parse(localStorage.getItem("lifeflow_chats") || "null");
        setChats(Array.isArray(local) ? local : initialDemoChats);
      });
  };

  useEffect(() => {
    loadChat();
    // Auto-refresh every 5 seconds
    const interval = setInterval(loadChat, 5000);
    return () => clearInterval(interval);
  }, []);

  const sendChat = async () => {
    if (!data.name || !data.message.trim()) return;

    setSending(true);

    const newMsg = {
      name: data.name,
      message: data.message.trim(),
    };

    try {
      await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // offline fallback
    }

    setChats((prev) => {
      const updated = Array.isArray(prev) ? [...prev, newMsg] : [newMsg];
      localStorage.setItem("lifeflow_chats", JSON.stringify(updated));
      return updated;
    });

    setData({ ...data, message: "" });
    setSending(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendChat();
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="page-content">
      {/* Page Header */}
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>
        <div className="page-header-text">
          <h1>Community Chat 💬</h1>
          <p>Connect with donors and recipients</p>
        </div>
      </div>

      <div className="chat-container">
        {/* Messages Area */}
        <div className="chat-messages" id="chat-messages">
          {chats.length === 0 && (
            <div className="empty-state" style={{ padding: "40px 20px" }}>
              <div className="empty-state-icon">💬</div>
              <p className="empty-state-text">No messages yet</p>
              <p className="empty-state-sub">Be the first to say hello!</p>
            </div>
          )}

          {Array.isArray(chats) && chats.map((c, index) => (
            <div className="chat-message" key={c.id || index}>
              <div className="chat-message-avatar">
                {getInitials(c.name || "U")}
              </div>
              <div className="chat-message-body">
                <div className="chat-message-name">{c.name}</div>
                <div className="chat-message-text">{c.message}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Row */}
        <div className="chat-input-row">
          <input
            className="form-input"
            placeholder="Your name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            style={{ flex: "0 0 140px" }}
            id="chat-name-input"
          />
          <input
            className="form-input"
            placeholder="Type a message..."
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            onKeyDown={handleKeyPress}
            id="chat-message-input"
          />
          <button
            className="btn btn-primary"
            onClick={sendChat}
            disabled={sending || !data.message.trim()}
            id="chat-send-btn"
          >
            {sending ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;