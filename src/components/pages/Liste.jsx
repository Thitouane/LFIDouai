import React from "react";

export default function Liste({ candidates }) {
  return (
    <section className="candidates-grid">
      {candidates.map((c, index) => (
        <div className="candidate-card" key={index}>
          <div className="photo-wrapper">
            <img src={c.photo} alt={c.name} />
          </div>
          <div className="candidate-header">
            <h3>{c.name}</h3>
            <span className="candidate-age">{c.age} ans</span>
          </div>

          <h4 className="candidate-job">{c.taf}</h4>
          <p>{c.role}</p>
        </div>
      ))}
    </section>
  );
}