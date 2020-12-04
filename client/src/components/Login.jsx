import React from 'react';
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <div>
      <main>
        <form className="login">
          <div className="login_field">
            <label className="login_field_label">email</label>
            <input type="text" placeholder="example@mail.ru"></input>
          </div>
          <div className="login_field">
            <label className="login_field_label">password</label>
            <input type="text"></input>
          </div>
          <div className="login_field">
            {/* <input onClick={goToPage} type="submit" value="LogIn" /> */}
            <Link to='/profile'>Профиль</Link>
          </div>
        </form>
      </main>
    </div>
  )
}
