import React from "react";

export default function CandidatListe({ candidates }) {
  return (
    <section className="text-list">
      <div className="text-columns">
        {candidates.map((c, index) => (
         <div className="text-item">
            <strong className="candidate-name">
                {c.name}
            </strong>
            <span>
                {c.age} ans – {c.taf}
            </span>
        </div>
        ))}
      </div>
    </section>
  );
}