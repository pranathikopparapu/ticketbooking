import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const movieTitles = {
  1: "Inception",
  2: "Interstellar",
  3: "Watcher",
  4: "Harry Potter",
  5: "Avengers: Endgame",
  6: "Avatar",
  7: "Doctor Strange",
  8: "The Call",
  9: "The Hobbit",
};

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, selectedSeats, movieId, date, time } = location.state || {};

  if (!name || !selectedSeats || !movieId || !date || !time) {
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>No booking details found.</h2>
        <button onClick={() => navigate("/")} style={styles.button}>
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎉 Booking Confirmed!</h2>
      <div style={styles.ticket}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Movie:</strong> {movieTitles[movieId]}</p>
        <p><strong>Seats:</strong> {selectedSeats.join(", ")}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
      </div>
      <button onClick={() => navigate("/")} style={styles.button}>
        Book Another Ticket
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    background: "linear-gradient(to right,rgb(29, 108, 151),rgb(147, 230, 249))",
    minHeight: "100vh",
    fontFamily: "Arial",
    color: "#333",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#2e7d32",
    marginBottom: "1.5rem",
  },
  ticket: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "1.5rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.67)",
    textAlign: "left",
  },
  button: {
    marginTop: "2rem",
    padding: "0.75rem 1.5rem",
    fontSize: "16px",
    backgroundColor: "#1976D2",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Confirmation;
