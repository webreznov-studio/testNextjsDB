import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function Login() {
  const redirect = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function goToPage(e) {
    e.preventDefault();
    Axios.post("/api/database/check-user", {
      params: {
        email: login,
        password: password,
      },
    })
      .then(function (res) {
        return res.data.status ? redirect.push("/profile") : (setLogin(''), setPassword(''));
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <div>
      <main>
        <form onSubmit={(e) => goToPage(e)} className="login">
          <div className="login_field">
            <label className="login_field_label">email</label>
            <input
              type="email"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              placeholder="example@mail.ru"
              required
            ></input>
          </div>
          <div className="login_field">
            <label className="login_field_label">password</label>
            <input 
              type="text" 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              required
            ></input>
          </div>
          <div className="login_field">
            <input type="submit" value="LogIn" />
          </div>
        </form>
      </main>
    </div>
  );
}
