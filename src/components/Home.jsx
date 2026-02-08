import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

import FallingHearts from "./FallingHearts";
import VisitorCounter from "./VisitorCounter";

export default function Home() {
  const navigate = useNavigate();

  const [noCount, setNoCount] = useState(0);

  const messages = [
    "NO 💔",
    "Are you sure? 😢",
    "Think again 🥺",
    "Don't break my heart 💔",
    "Please 😭",
    "Okay... last chance 😞",
    "My heart still says YES ❤️",
  ];

  const handleNo = () => {
    if (noCount >= messages.length - 1) {
      navigate("/yes");
    } else {
      setNoCount(noCount + 1);
    }
  };

  

  return (
    <div className="valentine-wrapper">
      {/* <FallingHearts /> */}
      <div className="valentine-box">
        <h1>😙🩷</h1>
        <h2>Will you be my Valentine? 💖</h2>

        <div className="btn-group">
          <button className="yes-btn" onClick={() => navigate("/yes")}>
            YES ❤️
          </button>

          <button className="no-btn" onClick={handleNo}>
            {messages[noCount]}
          </button>
        </div>

        {noCount > 0 && (
          <p className="no-message">
            My heart doesn't accept NO when it comes to you 💞
          </p>
        )}

        <VisitorCounter/>
      </div>
    </div>
  );
}
