import "./css/FallingHearts.css";

const icons = ["❤️", "💖", "💕", "💘", "🌸", "💞", "🌹", "💓"];

export default function FallingHearts() {
  return (
    <div className="fall-container">
      {Array.from({ length: 30 }).map((_, i) => {
        const icon = icons[Math.floor(Math.random() * icons.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 6 + Math.random() * 6;
        const size = 18 + Math.random() * 18;

        return (
          <span
            key={i}
            className="fall-icon"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              fontSize: `${size}px`
            }}
          >
            {icon}
          </span>
        );
      })}
    </div>
  );
}
