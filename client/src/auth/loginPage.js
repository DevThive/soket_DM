import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../App.css";

function LoginPage() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log("errorMessage:", error.response);
    }
  };

  const history = useHistory();

  const handleSignUp = () => {
    history.push("/signup");
  };

  return (
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          onClick={(e) => setPassword(e.target.value)}
        />
        <label for="floatingPassword">Password</label>
      </div>

      <button
        class="btn btn-primary w-100 py-2"
        type="button"
        onClick={handleSignIn}
      >
        Sign in
      </button>

      <button
        class="btn btn-primary w-100 py-2"
        type="button"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
  );
}
export default LoginPage;
