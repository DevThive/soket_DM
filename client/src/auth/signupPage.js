import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../App.css";

function SingupPage() {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [introduce, setInroduce] = useState("");
  const [favorite_weather, setFavorite_weather] = useState("");

  const history = useHistory();

  const inputSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/signup", {
        email,
        password,
        passwordCheck,
        name,
        nickname,
        location,
        introduce,
        favorite_weather,
      });
      console.log(response.data);
    } catch (error) {
      console.log("ErrorMessage:", error.response);
    }
  };

  const handleSignIn = () => {
    history.push("/login");
  };

  return (
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      {/* 이메일(id) */}
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEamil(e.target.value)}
        />
        <label for="floatingInput">Email address</label>
      </div>
      {/* 패스워드 입력 */}
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          //value={password}
          onClick={(e) => setPassword(e.target.value)}
        />
        <label for="floatingPassword">Password</label>
      </div>
      {/** 패스워드 확인 입력 */}
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPasswordCheck"
          placeholder="PasswordCheck"
          //value={passwordCheck}
          onClick={(e) => setPasswordCheck(e.target.value)}
        />
        <label for="floatingPassword">PasswordCheck</label>
      </div>
      {/** 닉네임 입력 */}
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingNickname"
          placeholder="nickname"
          //value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <label for="floatingInput">Nickname</label>
      </div>
      {/** 이름 입력 */}
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingName"
          placeholder="name"
          //value={nickname}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="floatingInput">Name</label>
      </div>
      {/** 주소(지역)) 입력 */}
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingLocation"
          placeholder="location"
          //value={nickname}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label for="floatingInput">Location</label>
      </div>
      {/** 한줄 소개 입력 */}
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingIntroduce"
          placeholder="introduce"
          //value={introduce}
          onChange={(e) => setInroduce(e.target.value)}
        />
        <label for="floatingInput">introduce</label>
      </div>

      <button
        class="btn btn-primary w-100 py-2"
        type="button"
        onClick={handleSignIn}
      >
        Cancel
      </button>

      <button
        class="btn btn-primary w-100 py-2"
        type="button"
        onClick={inputSignup}
      >
        SignUp
      </button>
      <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
  );
}

export default SingupPage;
