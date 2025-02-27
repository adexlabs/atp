import React, { useState } from "react";

export default function EmailLogin () {
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    let klaviyo = window.klaviyo || [];
    klaviyo.push(["identify", { Email: email }]); // Identify the user
    klaviyo.push(["track", "User Logged In", { Email: email }]); // Track login event

    alert("Login successful!");
    setEmail(""); // Reset input
  };

  return (
    <form onSubmit={handleLogin} className="email-login">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
      <button type="submit">Login</button>
    </form>
  );
};


