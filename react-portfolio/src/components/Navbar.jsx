import { useState } from "react";

export default function Navbar() {
  const [light, setLight] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    setLight(!light);
  };

  return (
    <nav className="nav">
      <h2>DS</h2>
      <button onClick={toggleTheme}>
        {light ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}