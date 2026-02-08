// // LoveLetterPopup.jsx
// import React, { useState } from "react";
// import "./css/LoveLetterPopup.css";

// const LoveLetterPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button className="open-btn" onClick={togglePopup}>
//         Open Love Letter 💌
//       </button>

//       {isOpen && (
//         <div className="popup-overlay">
//           <div className="popup-content">
//             <h2>My Dearest ❤️</h2>
//             <p className="love-text">
//               💖 Every moment with you feels like a beautiful dream 💖 <br />
//               🌟 Your smile lights up my world, and your laughter is music to my
//               soul 🎶 <br />
//               💍 I cherish every memory and look forward to many more 🌹✨
//             </p>
//             <button className="close-btn" onClick={togglePopup}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoveLetterPopup;


import React, { useState } from "react";
import "./css/LoveLetterPopup.css";

function LoveLetterPopup () {
  const loveMessages = [
    "💖 Every moment with you feels like a beautiful dream 💖\n🌟 Your smile lights up my world, and your laughter is music to my soul 🎶\n💍 I cherish every memory and look forward to many more 🌹✨",
    "😍 My heart beats only for you 💓\n🌸 You make every day brighter and every night sweeter 🌙✨\n💞 Forever yours, my love 💘",
    "💌 You are my sunshine on a cloudy day ☀️\n🌹 Your love makes me feel alive and happy every moment 🎶💖\n💍 Together forever, my darling 💫",
    "💕 Being with you is like a dream I never want to wake up from 🌙✨\n💖 Your smile, your laughter, your love… everything is magical 💞\n💍 My today, my tomorrow, my forever 🌹",
    "💓 To my love, my life, my everything 🌟\n💖 You light up my soul and fill my heart with joy 🌸\n💌 I can't wait to make more memories with you 💍✨"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const togglePopup = () => {
    if (!isOpen) {
      // Pick a random message when opening
      const randomIndex = Math.floor(Math.random() * loveMessages.length);
      setCurrentMessage(loveMessages[randomIndex]);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="LoveLetterPopup-container">
      <button className="open-btn" onClick={togglePopup}>
        Open Love Letter 💌
      </button>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>My Dearest ❤️</h2>
            <p className="love-text">
              {currentMessage.split("\n").map((line, idx) => (
                <React.Fragment key={idx}>
                  {line} <br />
                </React.Fragment>
              ))}
            </p>
            <button className="close-btn" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveLetterPopup;
