import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [studentname, setstudentname] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5285/api/Students/Login?studentName=" +
          studentname +
          "&password=" +
          password
      );
      alert(response);
    } catch (error) {
      console.error("Login failed:", error);
      //setError("Invalid email or password");
    }

    alert(`Login Successfull`);
  };

  return (
    <div className="App">
      <div className="form-control">
        <input
          type="text"
          placeholder="UserName"
          value={studentname}
          onChange={(e) => setstudentname(e.target.value)}
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button className="btn btn-primary" onClick={() => handleLogin()}>
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default App;
