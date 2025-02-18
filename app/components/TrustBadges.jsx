import React from 'react';


export default function TrustBadges({ badges = [], count = 0 }) {
  // Slice the badges array based on the count prop
  const visibleBadges = badges.slice(0, count);

  return (
    <div className="trust-badges-container">
      <div className="trust-badges">
        {visibleBadges.map((badge, index) => (
          <div key={index} className="trust-badge-wrapper">
            <img
              src={badge.src}
              alt={badge.alt}
              className="trust-badge"
            />
            <span className="badge-text">{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}