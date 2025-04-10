import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: "Inception",
    poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg"
  },
  {
    id: 2,
    title: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg"
  },
  {
    id: 3,
    title: "Watcher",
    poster: "https://m.media-amazon.com/images/M/MV5BOGU3ZjhhNjYtNTk3MS00ZDM3LWE1MjQtZDNmNTIzNjhmZDFkXkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: 4,
    title: "Harry Potter",
    poster: "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_SL1500_.jpg"
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg"
  },
  {
    id: 6,
    title: "Avatar",
    poster: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg"
  },
  {
    id: 7,
    title: "Doctor Strange",
    poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1178_.jpg"
  },
  {
    id: 8,
    title: "The Call",
    poster: "https://image.tmdb.org/t/p/original/oz8hvZHg7tIdGwh0ErPRhobJKPR.jpg"
  },
  {
    id: 9,
    title: "The Hobbit",
    poster: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_SL1500_.jpg"
  }
];

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundImage: "url('https://wallpaperaccess.com/full/329583.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Menu</h2>
        <Link to="/login">
          <button style={buttonStyle}>Login</button>
        </Link>
        <Link to="/signup">
          <button style={buttonStyle}>Sign Up</button>
        </Link>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "2rem", textAlign: "center", backdropFilter: "blur(3px)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>🎟️ Movie Ticket Booking</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "10px",
                padding: "1rem",
                width: "200px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  marginBottom: "0.5rem",
                }}
              />
              <h3 style={{ marginBottom: "0.5rem" }}>{movie.title}</h3>
              <Link to={`/movie/${movie.id}`}>
                <button style={buttonStyle}>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  margin: "0.5rem 0",
  backgroundColor: "#ff5722",
  border: "none",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Home;
