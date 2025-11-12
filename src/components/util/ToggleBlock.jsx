import React, { useState } from "react";
import "../../styles/util/ToggleBlock.css";


export default function ToggleBlock({ 
  children, 
  className = "",
  defaultOpen = true 
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen); // ← OUVERT PAR DÉFAUT

  return (
    <div className={`toggle-block ${className}`}>
      <div className={`toggle-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>

      <button
        className="toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Réduire ▲" : "Étendre   ▼"}
      </button>
    </div>
  );
}