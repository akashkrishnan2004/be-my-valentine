import React, { useState } from "react";
import "./css/CopyLink.css";

export default function CopyLink() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      //   await navigator.clipboard.writeText(window.location.origin);
      await navigator.clipboard.writeText(
        "https://be-my-valentine-for-ever.netlify.app/",
      );
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      alert("Failed to copy 😢");
    }
  };

  return (
    <div className="copy-container">
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied 💖" : "Copy Link 💌"}
      </button>
    </div>
  );
}
