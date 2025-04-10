import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const movieData = {
  1: {
    title: "Inception",
    description: "A skilled thief who steals corporate secrets using dream-sharing technology.",
    poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg"
  },
  2: {
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg"
  },
  3: {
    title: "Watcher",
    description: "A young woman moves to a new city only to realize someone is constantly watching her.",
    poster: "https://m.media-amazon.com/images/M/MV5BOGU3ZjhhNjYtNTk3MS00ZDM3LWE1MjQtZDNmNTIzNjhmZDFkXkEyXkFqcGc@._V1_.jpg"
  },
  4: {
    title: "Harry Potter",
    description: "The magical journey of a young wizard and his friends at Hogwarts School.",
    poster: "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_SL1500_.jpg"
  },
  5: {
    title: "Avengers: Endgame",
    description: "The Avengers unite for one final stand against Thanos to restore balance to the universe.",
    poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg"
  },
  6: {
    title: "Avatar",
    description: "A marine on an alien planet becomes torn between following his orders and protecting the world he feels is his home.",
    poster: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg"
  },
  7: {
    title: "Doctor Strange",
    description: "A former surgeon embarks on a journey of healing, discovering the mystic arts.",
    poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1178_.jpg"
  },
  8: {
    title: "The Call",
    description: "Two women from different times connect through a mysterious phone call that changes their fates.",
    poster: "https://image.tmdb.org/t/p/original/oz8hvZHg7tIdGwh0ErPRhobJKPR.jpg"
  },
  9: {
    title: "The Hobbit",
    description: "Bilbo Baggins joins a quest to reclaim a lost dwarf kingdom from a fearsome dragon.",
    poster: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_SL1500_.jpg"
  }
};

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movieData[id];
  const navigate = useNavigate();

  if (!movie) {
    return <div style={{ color: "#fff", padding: "2rem" }}>Movie not found</div>;
  }

  const handleBooking = () => {
    navigate(`/booking/${id}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${movie.poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(8px)",
          borderRadius: "10px",
          padding: "2rem",
          maxWidth: "600px",
          color: "#fff",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.6)"
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{movie.title}</h2>
        <img
          src={movie.poster}
          alt={movie.title}
          style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "8px", marginBottom: "1rem" }}
        />
        <p style={{ marginBottom: "1.5rem" }}>{movie.description}</p>
        <button
          onClick={handleBooking}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#ff5722",
            border: "none",
            color: "#fff",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Book Tickets
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
