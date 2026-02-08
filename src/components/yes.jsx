import CopyLink from "./CopyLink";
import "./css/yes.css";
import FallingHearts from "./FallingHearts";
import LoveLetterPopup from "./LoveLetterPopup";

export default function LoveYou() {
  return (
    <div className="love-wrapper">
      <FallingHearts />
      <div className="love-card">
        <h1 className="love-emoji">😍💍❤️</h1>

        <h2 className="love-title">Yayyyy!! I Love You</h2>

        <p className="love-text">
          You are my Valentine 💖 <br />
          My today, my tomorrow, my forever 💍
        </p>

        <div className="hearts">
          <span>❤️</span>
          <span>💖</span>
          <span>💕</span>
          <span>💘</span>
          <span>❤️</span>
        </div>
        <LoveLetterPopup />
        <CopyLink />
      </div>
    </div>
  );
}
