"use client";
import { useState } from "react";
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [regNum, setRegNum] = useState("");
  const [event, setEvent] = useState("");
  const [contact, setContact] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    // 1. Required fields
    if (!name || !email || !regNum || !event || !contact) {
      setError("All fields are required");
      return;
    }

    // 2. Name minimum 4 characters
    if (name.length < 4) {
      setError("Name must contain at least 4 characters");
      return;
    }

    // 3. Email validation
    if (!email.includes("@")) {
      setError("Enter a valid Email");
      return;
    }

    // 4. Registration number maximum 8 characters
    if (regNum.length > 8) {
      setError("Registration number must not be more than 8 characters");
      return;
    }

    // 5. Contact maximum 10 characters
    if (contact.length > 10) {
      setError("Contact should not be more than 10 characters");
      return;
    }
    setSuccess("Registration Successful!");
  }

  return (
    <div>
      <h1>College Event Registration</h1>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Enter Registration Number"
          value={regNum}
          onChange={(e) => setRegNum(e.target.value)}
        />
        <br />

        <select
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        >
          <option value="">Select Event Category</option>
          <option value="Technical">Technical</option>
          <option value="Cultural">Cultural</option>
          <option value="Sports">Sports</option>
        </select>
        <br />

        <input
          type="tel"
          placeholder="Enter Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <br />

        <button type="submit">Register</button>
      </form>

      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
}