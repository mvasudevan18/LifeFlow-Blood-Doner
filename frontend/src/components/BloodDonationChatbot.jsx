import { useState, useRef, useEffect } from "react";

// ─── Comprehensive Blood Donation Knowledge Base ───
const KNOWLEDGE_BASE = {
  greetings: {
    patterns: ["hi", "hello", "hey", "good morning", "good evening", "good afternoon", "hola", "namaste", "howdy", "greetings"],
    response: "Hello! 👋 I'm **LifeFlow AI**, your blood donation assistant. I can help you with:\n\n🩸 Blood donation eligibility\n⏰ Donation process & preparation\n🔬 Blood types & compatibility\n💪 Health benefits of donating\n⚠️ Side effects & recovery\n📋 FAQs about blood donation\n\nWhat would you like to know?"
  },

  eligibility: {
    patterns: ["eligible", "eligibility", "can i donate", "who can donate", "qualify", "requirements", "criteria", "am i eligible", "donate blood", "age limit", "weight requirement"],
    response: "**Blood Donation Eligibility Criteria:**\n\n✅ **Age:** 18–65 years old\n✅ **Weight:** Minimum 50 kg (110 lbs)\n✅ **Health:** Generally good health, feeling well on the day\n✅ **Hemoglobin:** At least 12.5 g/dL\n✅ **Pulse:** 50–100 beats/min, regular\n✅ **Blood Pressure:** Systolic 100–180, Diastolic 60–100\n✅ **Temperature:** Normal (below 37.5°C / 99.5°F)\n✅ **Gap:** At least 56 days (8 weeks) between whole blood donations\n\n❌ **Cannot donate if:**\n• Pregnant or breastfeeding\n• Had tattoo/piercing in last 6 months\n• Taking antibiotics or certain medications\n• History of HIV, Hepatitis B/C\n• Recent surgery (wait 6 months)\n• Feeling unwell or have a cold/flu"
  },

  bloodTypes: {
    patterns: ["blood type", "blood group", "blood types", "type a", "type b", "type o", "type ab", "universal donor", "universal recipient", "rh factor", "rh positive", "rh negative", "compatibility", "compatible", "which blood type"],
    response: "**Blood Types & Compatibility:**\n\n🔴 There are **8 main blood types** based on ABO and Rh systems:\n\n| Blood Type | Can Donate To | Can Receive From |\n|-----------|---------------|------------------|\n| **O-** | All types (Universal Donor) | O- only |\n| **O+** | O+, A+, B+, AB+ | O-, O+ |\n| **A-** | A-, A+, AB-, AB+ | O-, A- |\n| **A+** | A+, AB+ | O-, O+, A-, A+ |\n| **B-** | B-, B+, AB-, AB+ | O-, B- |\n| **B+** | B+, AB+ | O-, O+, B-, B+ |\n| **AB-** | AB-, AB+ | O-, A-, B-, AB- |\n| **AB+** | AB+ only (Universal Recipient) | All types |\n\n🌟 **O-** is the **Universal Donor** — can be given to anyone!\n🌟 **AB+** is the **Universal Recipient** — can receive from anyone!"
  },

  process: {
    patterns: ["process", "how to donate", "donation process", "what happens", "procedure", "steps", "how does it work", "walk me through", "step by step"],
    response: "**Blood Donation Process (Step by Step):**\n\n**1️⃣ Registration (5 min)**\nFill out a form with personal info and medical history\n\n**2️⃣ Health Screening (10 min)**\nA mini-physical: temperature, pulse, blood pressure, and hemoglobin check\n\n**3️⃣ The Donation (8–12 min)**\n• Sit comfortably in a reclining chair\n• Your arm is cleaned with antiseptic\n• A sterile needle is inserted (slight pinch!)\n• About **1 pint (470 mL)** of blood is collected\n• The needle is removed and a bandage is applied\n\n**4️⃣ Rest & Refreshments (15 min)**\n• Relax and enjoy snacks and drinks\n• Staff monitors you for any dizziness\n\n**⏱️ Total Time: ~45 minutes to 1 hour**\n\n💡 Your body replaces the donated blood volume within 24-48 hours!"
  },

  preparation: {
    patterns: ["prepare", "preparation", "before donation", "before donating", "tips before", "what to eat", "how to prepare", "ready", "before i donate", "eat before"],
    response: "**How to Prepare for Blood Donation:**\n\n✅ **Before Donating:**\n• 🥩 Eat **iron-rich foods** (spinach, red meat, beans, lentils) for a few days before\n• 💧 Drink **plenty of water** — at least 16 oz extra before donation\n• 😴 Get a **good night's sleep** (7-8 hours)\n• 🍳 Eat a **healthy meal** 2-3 hours before donating\n• 🪪 Bring a **valid ID** and your donor card if you have one\n\n❌ **Avoid Before Donating:**\n• 🍺 **No alcohol** for 24 hours before\n• 🍟 **Avoid fatty foods** — they affect blood tests\n• 💊 Don't skip regular medications (but inform the staff)\n• 🏋️ Avoid heavy exercise right before\n• ☕ Limit caffeine as it can dehydrate you"
  },

  afterDonation: {
    patterns: ["after donation", "after donating", "post donation", "recovery", "after i donate", "what to do after", "care after", "tips after", "post-donation"],
    response: "**After Blood Donation — Recovery Tips:**\n\n✅ **Immediately After:**\n• Rest for **10-15 minutes** at the donation site\n• Drink **extra fluids** for the next 24-48 hours\n• Enjoy the **snacks provided** — they help!\n• Keep the bandage on for **at least 4-5 hours**\n\n✅ **Next 24 Hours:**\n• 💧 Drink **plenty of water and juice**\n• 🥗 Eat **iron-rich foods** (meat, spinach, beans)\n• 🍊 Have **Vitamin C** to help iron absorption\n• 🚫 **Avoid alcohol** for 24 hours\n• 🏋️ **No heavy lifting** or strenuous exercise\n• 🚗 Wait **30 minutes** before driving\n\n⚠️ **If you feel dizzy:**\n• Lie down with feet elevated\n• Apply cold compress to forehead\n• Drink cool fluids\n• If it persists, contact the blood bank"
  },

  sideEffects: {
    patterns: ["side effect", "side effects", "risks", "risk", "dangerous", "is it safe", "pain", "hurt", "does it hurt", "faint", "dizzy", "dizziness", "bruise", "complications", "safe"],
    response: "**Side Effects & Safety of Blood Donation:**\n\n✅ **Blood donation is VERY SAFE.** The equipment is sterile and used only once.\n\n**Common (Mild) Side Effects:**\n• 💉 Slight **bruising** at needle site — usually fades in a few days\n• 😵 Brief **dizziness or lightheadedness** — rest and drink fluids\n• 🤕 Mild **soreness** in the arm — normal for 1-2 days\n• 😰 Occasional **fatigue** — rest well and stay hydrated\n\n**Rare Side Effects:**\n• Fainting (< 1% of donors)\n• Nausea\n• Nerve irritation at needle site\n\n**🛡️ Safety Facts:**\n• ❌ You **CANNOT get HIV/AIDS** from donating blood\n• ✅ All needles are **brand new and sterile**\n• ✅ Your body **replaces blood** within 4-6 weeks\n• ✅ Professional staff are trained for emergencies"
  },

  benefits: {
    patterns: ["benefit", "benefits", "why donate", "advantages", "reasons", "why should i", "good for health", "health benefits", "importance", "important"],
    response: "**Benefits of Blood Donation:**\n\n❤️ **Health Benefits for YOU:**\n• 🫀 **Reduces heart disease risk** — lowers iron overload\n• 🔬 **Free health screening** — BP, hemoglobin, cholesterol checked\n• 🔄 **Stimulates new blood cell production** — rejuvenates your blood\n• 🧠 **Reduces risk of cancer** — linked to lower cancer rates\n• 😊 **Boosts mental health** — the joy of helping others!\n• 🔥 **Burns calories** — about 650 calories per donation\n\n🌍 **Impact on the World:**\n• 🏥 **1 donation saves up to 3 lives** (red cells, platelets, plasma)\n• 💉 **Every 2 seconds**, someone needs blood\n• 🩸 Only **3% of eligible people** actually donate\n• 🚑 Critical for surgeries, cancer treatment, accidents, childbirth\n• 👶 Premature babies often need transfusions\n\n**YOU are a hero every time you donate! 🦸**"
  },

  frequency: {
    patterns: ["how often", "frequency", "how many times", "gap between", "interval", "wait between", "donate again", "next donation", "can i donate again"],
    response: "**How Often Can You Donate?**\n\n| Donation Type | Wait Time | Per Year |\n|--------------|-----------|----------|\n| **Whole Blood** | 56 days (8 weeks) | Up to 6 times |\n| **Platelets** | 7 days | Up to 24 times |\n| **Plasma** | 28 days | Up to 13 times |\n| **Double Red Cells** | 112 days (16 weeks) | Up to 3 times |\n\n📝 **Key Notes:**\n• Men can typically donate **more frequently** than women\n• Women are recommended to donate **no more than 3 times a year** (due to menstrual iron loss)\n• Your body needs time to **replenish iron stores**\n• Listen to your body — if fatigued, wait longer\n• Always ensure your **hemoglobin is adequate** before donating again"
  },

  donationTypes: {
    patterns: ["types of donation", "donation types", "platelets", "plasma", "whole blood", "double red", "apheresis", "what can i donate", "kinds of donation"],
    response: "**Types of Blood Donation:**\n\n🩸 **1. Whole Blood Donation** (Most Common)\n• Donates all components: red cells, plasma, platelets\n• Takes 8-12 minutes\n• Used for trauma, surgery, anemia\n\n🟡 **2. Platelet Donation (Apheresis)**\n• Only platelets are collected; other components returned\n• Takes 1.5-2.5 hours\n• Critical for cancer patients and bone marrow transplants\n\n🟠 **3. Plasma Donation**\n• Only plasma is collected\n• Takes about 1.5 hours\n• Used for burn victims, clotting disorders, immune deficiencies\n\n🔴 **4. Double Red Cell Donation**\n• Concentrated red cells collected\n• Takes about 30 minutes longer\n• Ideal for O-, O+, A-, B- blood types\n\n🩻 **5. Autologous Donation**\n• Donate your OWN blood before a scheduled surgery\n• Stored and used for YOU during the procedure"
  },

  myths: {
    patterns: ["myth", "myths", "misconception", "false", "true or false", "fact check", "rumor", "scared", "fear", "worried", "concern", "scared to donate"],
    response: "**Blood Donation Myths vs Facts:**\n\n❌ **Myth:** Donating blood makes you weak\n✅ **Fact:** Your body recovers fully within 24-48 hours. Volume is replaced in hours, red cells in 4-6 weeks.\n\n❌ **Myth:** You can get diseases from donating\n✅ **Fact:** IMPOSSIBLE. All equipment is sterile, single-use, and disposed of after.\n\n❌ **Myth:** Diabetics can't donate blood\n✅ **Fact:** Diabetics CAN donate if their condition is well-controlled and they're healthy.\n\n❌ **Myth:** Vegetarians can't donate blood\n✅ **Fact:** Absolutely CAN! Just ensure adequate iron intake from beans, lentils, spinach.\n\n❌ **Myth:** You need a lot of blood, so donating 1 pint doesn't matter\n✅ **Fact:** 1 donation can save up to 3 lives!\n\n❌ **Myth:** It's extremely painful\n✅ **Fact:** Just a small pinch. Most donors say it's much less painful than expected.\n\n❌ **Myth:** Old people can't donate\n✅ **Fact:** Healthy adults up to 65 can donate. Some blood banks accept up to 75."
  },

  emergency: {
    patterns: ["emergency", "urgent", "accident", "need blood", "blood needed", "shortage", "crisis", "urgent blood", "sos"],
    response: "**Emergency Blood Needs:**\n\n🚨 **In an emergency, contact:**\n• Your nearest **blood bank** or hospital\n• **Red Cross** or local blood donation services\n• Use LifeFlow's **SOS feature** to send urgent requests!\n\n📊 **Blood Demand Facts:**\n• 🏥 **Every day**, approximately 36,000 units of blood are needed\n• 🚗 A single **car accident victim** may need up to 100 units\n• 🤰 **Childbirth complications** can require 5+ units\n• 🎗️ **Cancer patients** may need blood daily during treatment\n• 👶 **Premature infants** need tiny but critical transfusions\n\n💡 **How YOU Can Help:**\n• Donate blood regularly\n• Share LifeFlow with friends and family\n• Register as a donor and respond to SOS alerts\n• Organize blood drives at your workplace or community"
  },

  storage: {
    patterns: ["storage", "shelf life", "how long", "store blood", "blood storage", "expire", "expiry", "stored"],
    response: "**Blood Storage & Shelf Life:**\n\n| Component | Storage Temp | Shelf Life |\n|-----------|-------------|------------|\n| **Whole Blood** | 1-6°C | 21-35 days |\n| **Red Blood Cells** | 1-6°C | 42 days |\n| **Platelets** | 20-24°C (with agitation) | 5 days |\n| **Fresh Frozen Plasma** | -18°C or below | 1 year |\n| **Cryoprecipitate** | -18°C or below | 1 year |\n\n📝 **Important Notes:**\n• Platelets have the **shortest shelf life** — only 5 days!\n• This is why platelet donations are **constantly needed**\n• Blood banks must continuously replenish supplies\n• Unused blood is safely disposed of after expiry\n• Proper storage is critical to maintain quality and safety"
  },

  iron: {
    patterns: ["iron", "hemoglobin", "anemia", "iron rich", "iron deficiency", "low iron", "iron foods", "increase hemoglobin"],
    response: "**Iron & Hemoglobin for Blood Donors:**\n\n🔬 **Minimum Hemoglobin Levels:**\n• Men: **13.0 g/dL**\n• Women: **12.5 g/dL**\n\n🥗 **Iron-Rich Foods to Boost Hemoglobin:**\n\n**Animal Sources (Heme Iron — absorbed best):**\n• 🥩 Red meat (beef, lamb)\n• 🍗 Poultry (chicken, turkey)\n• 🐟 Fish and shellfish\n• 🥚 Eggs\n\n**Plant Sources (Non-Heme Iron):**\n• 🥬 Spinach and kale\n• 🫘 Beans, lentils, chickpeas\n• 🌰 Nuts and seeds (pumpkin seeds!)\n• 🥣 Fortified cereals and bread\n• 🍫 Dark chocolate\n\n💡 **Tips to Absorb More Iron:**\n• Pair iron foods with **Vitamin C** (oranges, tomatoes, bell peppers)\n• Avoid **tea/coffee** with meals — they block iron absorption\n• Cook in **cast iron** pans\n• Consider **iron supplements** if frequently donating"
  },

  thankyou: {
    patterns: ["thank", "thanks", "thank you", "thankyou", "appreciate", "helpful", "great", "awesome", "wonderful", "amazing"],
    response: "You're welcome! 😊 Remember, every drop of blood donated is a gift of life. If you have any more questions about blood donation, feel free to ask anytime!\n\n🩸 **\"The blood you donate gives someone another chance at life.\"** ❤️\n\nStay healthy, stay kind! 🌟"
  },

  goodbye: {
    patterns: ["bye", "goodbye", "see you", "talk later", "gotta go", "leaving", "exit", "close"],
    response: "Goodbye! 👋 Thank you for your interest in blood donation. Remember:\n\n🩸 **1 donation = 3 lives saved**\n💪 **Be a hero — donate blood!**\n\nSee you next time! Take care! ❤️"
  },

  whatis: {
    patterns: ["what is blood donation", "define blood donation", "meaning of blood donation", "what does blood donation mean", "explain blood donation", "tell me about blood donation", "about blood donation", "blood donation information", "info about blood donation"],
    response: "**What is Blood Donation?**\n\nBlood donation is a **voluntary act** of allowing your blood to be drawn and used for **transfusions** or made into **biopharmaceutical medications**.\n\n🩸 **Key Facts:**\n• It's a **simple, safe procedure** that takes about 10 minutes\n• About **1 pint (470 mL)** is collected per donation\n• Your body has about **10 pints** of blood — you donate less than 10%\n• Donated blood is **separated into components**: red cells, plasma, and platelets\n• Each component can help **different patients**\n• **1 donation can save up to 3 lives!**\n\n📅 **History:** The first successful blood transfusion was performed in **1818** by Dr. James Blundell.\n\n🌍 **Global Impact:** Every year, approximately **118.5 million blood donations** are collected worldwide, but the demand always exceeds supply."
  },

  covid: {
    patterns: ["covid", "coronavirus", "vaccine", "vaccinated", "covid vaccine", "covid-19", "pandemic", "after vaccine"],
    response: "**Blood Donation & COVID-19:**\n\n✅ **After COVID Infection:**\n• Wait at least **14 days** after symptoms resolve\n• Must be **symptom-free** and feeling well\n• No fever for at least **24 hours** without medication\n\n✅ **After COVID Vaccine:**\n• **Pfizer/Moderna/Covishield:** No waiting period if feeling well\n• **AstraZeneca:** No waiting period if no symptoms\n• **Johnson & Johnson:** Wait **14 days**\n• **Live attenuated vaccines:** Wait **14 days**\n\n📝 **Important Notes:**\n• COVID **CANNOT be transmitted** through blood transfusion\n• Blood banks have **extra safety measures** in place\n• Wearing masks during donation may be required\n• Blood donation is **essential** — don't let COVID stop you from saving lives!"
  },

  donation_camps: {
    patterns: ["camp", "drive", "blood drive", "blood camp", "organize", "host", "arrange", "donation camp", "how to organize"],
    response: "**Organizing a Blood Donation Camp:**\n\n📋 **Steps to Organize:**\n\n1️⃣ **Partner with a Blood Bank** — Contact your local blood bank or Red Cross\n2️⃣ **Choose a Venue** — School, office, community center, temple/church\n3️⃣ **Set a Date** — Weekdays work best; avoid holidays\n4️⃣ **Promote the Event** — Social media, posters, word of mouth\n5️⃣ **Arrange Logistics** — Chairs, refreshments, registration desk\n6️⃣ **Day of Event** — Blood bank provides staff, equipment, and supplies\n\n✅ **Requirements:**\n• Minimum **25-30 donors** expected\n• Clean, well-lit, ventilated space\n• Refreshment area for post-donation rest\n• Duration: typically **4-6 hours**\n\n🎗️ **Benefits for Organizations:**\n• CSR activity for companies\n• Community service hours for students\n• Saves lives and builds team spirit!"
  }
};

// ─── AI Response Engine ───
function getAIResponse(userMessage) {
  const input = userMessage.toLowerCase().trim();

  // Check each knowledge category
  for (const [, data] of Object.entries(KNOWLEDGE_BASE)) {
    for (const pattern of data.patterns) {
      if (input.includes(pattern)) {
        return data.response;
      }
    }
  }

  // Fallback response
  return "I'm not quite sure about that, but I'm here to help with anything related to **blood donation**! 🩸\n\nHere are some topics I can help with:\n\n• 🩸 **Eligibility** — \"Can I donate blood?\"\n• 🔬 **Blood Types** — \"Tell me about blood types\"\n• 📋 **Process** — \"How does donation work?\"\n• 🍽️ **Preparation** — \"How to prepare?\"\n• 💪 **Benefits** — \"Why should I donate?\"\n• ⚠️ **Side Effects** — \"Is it safe?\"\n• 🕐 **Frequency** — \"How often can I donate?\"\n• 🧪 **Donation Types** — \"Types of donations\"\n• 🤔 **Myths** — \"Common myths\"\n• 🦠 **COVID-19** — \"Donation after COVID?\"\n\nTry asking about any of these topics!";
}

// ─── Quick Reply Suggestions ───
const QUICK_REPLIES = [
  "Can I donate blood?",
  "Blood types",
  "Donation process",
  "Benefits of donating",
  "Side effects",
  "How to prepare",
];

const INITIAL_MESSAGE = {
  id: 1,
  sender: "bot",
  text: "Hi there! 👋 I'm **LifeFlow AI**, your blood donation assistant.\n\nI know everything about blood donation — eligibility, process, blood types, benefits, and more!\n\nAsk me anything or tap a quick question below! 🩸",
  time: new Date(),
};

function BloodDonationChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = (text) => {
    const userMsg = text || input.trim();
    if (!userMsg) return;

    const newUserMessage = {
      id: Date.now(),
      sender: "user",
      text: userMsg,
      time: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
      const response = getAIResponse(userMsg);
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: response,
        time: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Simple markdown-like rendering (bold only for chat)
  const renderText = (text) => {
    return text.split("\n").map((line, i) => {
      // Bold text
      const formatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      return (
        <span key={i}>
          <span dangerouslySetInnerHTML={{ __html: formatted }} />
          {i < text.split("\n").length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-avatar">🤖</div>
            <div className="chatbot-header-info">
              <div className="chatbot-header-name">LifeFlow AI</div>
              <div className="chatbot-header-status">Online — Blood Donation Expert</div>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-msg ${msg.sender}`}>
                <div className="chatbot-msg-avatar">
                  {msg.sender === "bot" ? "🤖" : "👤"}
                </div>
                <div className="chatbot-msg-bubble">
                  {renderText(msg.text)}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-msg bot">
                <div className="chatbot-msg-avatar">🤖</div>
                <div className="chatbot-msg-bubble">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="chatbot-quick-replies">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  className="quick-reply-chip"
                  onClick={() => sendMessage(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="chatbot-input-area">
            <input
              ref={inputRef}
              className="chatbot-input"
              placeholder="Ask about blood donation..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              className="chatbot-send-btn"
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        className={`chatbot-fab ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Chatbot"
      >
        {isOpen ? "✕" : "🤖"}
        {!isOpen && <div className="chatbot-badge"></div>}
      </button>
    </>
  );
}

export default BloodDonationChatbot;
