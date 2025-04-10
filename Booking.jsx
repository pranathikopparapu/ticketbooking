import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const seatNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleConfirm = () => {
    if (!name || !selectedSeats.length || !date || !time) {
      alert("Please fill all fields and select at least one seat.");
      return;
    }

    navigate("/confirmation", {
      state: {
        name,
        selectedSeats,
        movieId: id,
        date,
        time
      }
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎫 Book Your Tickets</h2>

      <input
        style={styles.input}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        style={styles.input}
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        style={styles.input}
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <h3>Select Seats</h3>
      <div style={styles.seats}>
        {seatNumbers.map((seat) => (
          <button
            key={seat}
            onClick={() => toggleSeat(seat)}
            style={{
              ...styles.seat,
              backgroundColor: selectedSeats.includes(seat) ? "#4CAF50" : "#ddd"
            }}
          >
            {seat}
          </button>
        ))}
      </div>

      <button style={styles.confirmButton} onClick={handleConfirm}>
        Confirm Booking
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    fontFamily: "Arial",
    minHeight: "100vh",
    background: "linear-gradient(to right,rgb(30, 96, 114),rgb(42, 128, 152))",
    color: "#fff",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
  },
  input: {
    padding: "0.75rem",
    width: "250px",
    marginBottom: "1rem",
    borderRadius: "6px",
    border: "none",
  },
  seats: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  seat: {
    width: "40px",
    height: "40px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  confirmButton: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#ff9800",
    border: "none",
    borderRadius: "6px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Booking;
