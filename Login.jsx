import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/'); // Redirect to Home after login
  };

  const goToSignup = () => {
    navigate('/signup'); // Redirect to Signup
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input type="email" placeholder="Email" required style={styles.input} />
          <input type="password" placeholder="Password" required style={styles.input} />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.text}>Don't have an account?</p>
        <button onClick={goToSignup} style={styles.secondaryButton}>Sign Up</button>
      </div>
    </div>
  );
};

const styles = {
    container: {
      backgroundImage: "url('https://wallpaperaccess.com/full/329583.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      padding: '2rem',
      borderRadius: '10px',
      width: '350px',
      textAlign: 'center',
      color: 'white',
    },
    title: {
      marginBottom: '1.5rem',
      fontSize: '1.8rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem',
    },
    input: {
      padding: '1rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
    },
    button: {
      padding: '1rem',
      fontSize: '1.1rem',
      borderRadius: '8px',
      backgroundColor: '#ff5722',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
      border: 'none',
      width: '100%',
      transition: '0.3s ease',
    },
    secondaryButton: {
      marginTop: '0.75rem',
      padding: '1rem',
      fontSize: '1.1rem',
      borderRadius: '8px',
      backgroundColor: '#4FC3F7',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
      border: 'none',
      width: '100%',
      transition: '0.3s ease',
    },
    text: {
      marginTop: '1rem',
      color: '#ccc',
    }
  };
  

export default Login;
