import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
      console.log(response.data); // "Login successful"
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={styles.signupText}>
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          style={styles.signupLink}
        >
          Signup
        </span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    // backgroundColor removed here
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  signupText: {
    marginTop: "15px",
    fontSize: "1rem",
    color: "#555",
  },
  signupLink: {
    color: "blue",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;


// import React, { useState } from "react";

// const styles = {
//   heading: {
//     fontSize: "2rem",
//     marginBottom: "20px",
//     color: "#333",
//     textAlign: "center",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     width: "300px",
//     padding: "20px",
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   input: {
//     padding: "10px",
//     marginBottom: "15px",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//     fontSize: "1rem",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "1rem",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   signupText: {
//     marginTop: "15px",
//     fontSize: "1rem",
//     color: "#555",
//     textAlign: "center",
//   },
//   signupLink: {
//     color: "blue",
//     cursor: "pointer",
//     textDecoration: "underline",
//   },
// };

// function Login() {
//   // Your login logic here
//   return (
//     <>
//       <h2 style={styles.heading}>Login</h2>
//       <form style={styles.form}>
//         <input style={styles.input} type="email" placeholder="Email" />
//         <input style={styles.input} type="password" placeholder="Password" />
//         <button style={styles.button} type="submit">Login</button>
//       </form>
//       <p style={styles.signupText}>
//         Don't have an account? <span style={styles.signupLink}>Signup</span>
//       </p>
//     </>
//   );
// }

// export default Login;
